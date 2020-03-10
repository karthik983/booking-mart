const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const customerSchema=new Schema({
    personal_name:{
        type:String,
        required:true
    },
    middle_name:{
        type:String,
        required:true
    },
    family_name:{
        type:String,
        required:true
    },
    organisation:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    booking:{
        type:Schema.Types.ObjectId,
        ref:"Bookings"
    }
})

module.exports=mongoose.model("Customers",customerSchema,"customer")