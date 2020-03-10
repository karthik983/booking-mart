const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const bookingSchema=new Schema({
    customer:{
        type:Schema.Types.ObjectId,
        ref:"Customers"
    },
    class:{
        type:String,
        required:true
    },
    gate_no:{
        type:Number,
        required:true
    },
    seat_no:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Bookings",bookingSchema,"booking")