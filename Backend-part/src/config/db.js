const mongoose = require("mongoose")

const connect = ()=>{
return mongoose.connect("mongodb+srv://jayasmita:sahu12@cluster0.3vyrwno.mongodb.net/?retryWrites=true&w=majority")
}
    

module.exports=connect