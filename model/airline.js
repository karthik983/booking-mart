const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const airlineSchema = new Schema({
    flight_name: {
        type: String,
        required: true
    },
    flight_no: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model("Airlines",airlineSchema,"airline")