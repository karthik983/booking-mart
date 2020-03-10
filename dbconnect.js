const mongoose = require("mongoose");
const config = require("config");

const dbconnect = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/airline`, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true })
        console.log("Connected to MongoDB");
    } catch (err) {
        throw err;
    }
}

module.exports = dbconnect;