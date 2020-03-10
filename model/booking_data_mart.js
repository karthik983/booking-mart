const mongoose=require("mongoose");

const Schema=mongoose.Schema;
const datamartSchema=new Schema({
    airline:{
        type:Schema.Types.ObjectId,
        ref:"Airlines"
    },
    airport:{
        type:Schema.Types.ObjectId,
        ref:"Airports"
    },
    booking:{
        type:Schema.Types.ObjectId,
        ref:"Bookings"
    },
    customer:{
        type:Schema.Types.ObjectId,
        ref:"Customers"
    }
})

module.exports=mongoose.model("Datamart",datamartSchema,"bookingdatamart")