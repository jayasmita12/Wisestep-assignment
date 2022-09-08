const mongoose = require("mongoose")

const scootySchema = mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true}
})

const Scooty = mongoose.model("scooty",scootySchema)
module.exports = Scooty