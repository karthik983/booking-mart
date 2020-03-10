const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");

const Airlines = require("../model/airline");

router.post("/airline", [
    check("flight_name", "Flight name must exist").exists(),
    check("flight_no", "Flight number must exist").exists(),
    check("from", "From must be present").exists(),
    check("to", "Destination must be present").exists()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const user = req.body;
        const airline = new Airlines(user)
        await airline.save()
        res.json(airline)
    } catch (err) {
        throw err;
    }

})

router.get("/airline",async (req,res)=>{
    const airline=await Airlines.find({})
    res.json(airline)
})

module.exports = router;