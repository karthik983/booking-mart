const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const Bookings=require("../model/booking")
const Customers = require("../model/customers");
const auth=require("./middleware/auth")
const jwt=require("jsonwebtoken")
const config=require("config")

router.post("/book", auth,[
    check("class", "Classes are required").exists(),
    check("gate_no", "Gate is required").exists(),
    check("seat_no", "Seat Number is required").exists(),
    check("date","Date must be present").exists(),
    check("time","time must be present").exists()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const book=req.body;
        book.customer=req.myuser.id
        const booking=new Bookings(book)
        await booking.save()
        const customer=await Customers.findById(req.myuser.id)
        customer.booking=booking._id
        await customer.save()
        res.json(booking)
    } catch (err) {
        throw err;
    }
})

router.get("/book",auth,async(req,res)=>{
    try{
        const booking=await Bookings.findOne({customer:req.myuser.id}).populate("customer","-email -password")
        res.json(booking)
    }catch(err){
        throw err;
    }
})

module.exports = router;