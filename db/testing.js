const mongoose=require('mongoose');

const testSchema= new mongoose.Schema({
    purpose:String,
    origin:String,
    destn:String,
    timeb:String,
    traveltime:String,
    travelcost:Number,
    tranfer:Number,
    same_mode:String,
    regularity:String,
    sitting_in_bus:String,
    level_of_crowding:Number


});

module.exports=mongoose.model("tests",testSchema);
