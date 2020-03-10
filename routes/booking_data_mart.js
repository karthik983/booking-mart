const express = require("express");
const router = express.Router();

const Datamart = require("../model/booking_data_mart")
const auth = require("./middleware/auth")
const Bookings=require("../model/booking")
const Customers = require("../model/customers");


// to post use booking auth token

router.post("/data-mart/:portid/:airid", auth, async (req, res) => {
    try {
        const user = {}
        user.airline = req.params.airid;
        user.airport = req.params.portid
        user.customer = req.myuser.id
        const customer=await Customers.findById(req.myuser.id)
        user.booking=customer.booking
        const datamart = new Datamart(user)
        await datamart.save()
        res.json(datamart)
    } catch (err) {
        throw err;
    }
})

// to get use customer auth token
router.get("/data-mart",auth, async (req, res) => {
    try {
        const datamart=await Datamart.findOne({customer:req.myuser.id}).populate("customer booking airport airline","-email -password -_id")
        res.json(datamart)
    } catch (err) {
        throw err;
    }
})


module.exports = router;