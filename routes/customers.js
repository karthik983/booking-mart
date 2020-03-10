const express = require("express")
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt=require("jsonwebtoken");
const Customers = require("../model/customers");
const config=require("config");
const bcrypt=require("bcrypt")
const saltRounds = 10;


router.post("/customer", [
    check("personal_name").exists().withMessage("Personal name is required"),
    check("middle_name").exists().withMessage("Middle name is required"),
    check("family_name").exists().withMessage("Family name is required"),
    check("organisation").exists().withMessage("Organisation is required"),
    check("dob").exists().withMessage("Date of Birth is required"),
    check("gender").exists().withMessage("Gender is required"),
    check("email","Email is required").isEmail(),
    check("password","Valid password is required").exists()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const user = req.body;
        user.password=await bcrypt.hash(user.password,saltRounds)
        const customer = new Customers(user)
        await customer.save()
        const payload={
            myuser:{
                id:customer._id
            }
        }
        const token=await jwt.sign(payload,config.get("SECRETKEY"),{expiresIn:3600})
        res.send(token);
    } catch (err) {
        throw err;
    }

})


module.exports = router;