const express = require("express")
const router = express.Router();

const { check, validationResult } = require("express-validator");

const Airports=require("../model/airport")

router.post("/airport", [
    check("airport_name", "Name of airport is required").exists(),
    check("location", "Location of airport required").exists(),
    check("code", "Code of the airport is required").exists()
], async (req, res) => {
    const user = req.body;
    const airport=new Airports(user);
    await airport.save();
    res.json(airport)
})

router.get("/airport",async(req,res)=>{
   const airport= await Airports.find({})
   res.json(airport)
})


module.exports = router;