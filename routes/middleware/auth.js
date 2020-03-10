const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async (req, res, next) => {
    const token = req.header("xyz")
    try {
        if (token) {
            const payload = await jwt.verify(token, config.get("SECRETKEY"))
            req.myuser = payload.myuser;
            next()
        }
        else{
            return res.status(402).json({"msg":"Invalid Token"})
        }

    } catch (err) {
        res.status(401).json({ "msg": "Token is Not Valid" })
    }

}