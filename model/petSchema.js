const mongoose = require("mongoose");

const petSchema =   new mongoose.Schema({
    "pet":{type:String},
    "des":{type:String},
    "email":{type:String},
    "loc":{type:String},
    "phone":{type:Number}
},{
    collection: "reunite"
})

module.exports=mongoose.model("petSchema",petSchema);