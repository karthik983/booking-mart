const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const airportSchema=new Schema({
    airport_name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Airports",airportSchema,"airport")