const express = require("express")
const router = express.Router();

const Customers=require("../model/customers");
const jwt=require("jsonwebtoken")
const config=require("config")
const bcrypt=require("bcrypt")

router.post("/login", async (req, res) => {
    try {
        const { email,password }=req.body;
        const emailExist=await Customers.findOne({email:email})
        if(!emailExist){
            return res.status(402).json({"msg":"Invalid Credentials"})
        }
        const result=await bcrypt.compare(password,emailExist.password)
        if(!result){
            return res.status(402).json({"msg":"Invalid Credentials"})
        }
        const payload={
            myuser:{
                id:emailExist._id
            }
        }
        const token=await jwt.sign(payload,config.get("SECRETKEY"),{expiresIn:3600})
        res.send(token)
    }
    catch (err) {
        throw err;
    }
})


module.exports = router;