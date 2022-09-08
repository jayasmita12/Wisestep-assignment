const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connect = require("./src/config/db")
const app = express()
const scootyController = require("./src/controllers/scootyController")

dotenv.config()
app.use(express.json())
app.use(cors())

app.use("/scooty", scootyController)

const port = process.env.PORT || 4800
app.listen(port,async()=>{
    try{
        await connect()
        console.log(`Connected Successfully to the PORT ${port}`)
    }
    catch(err){
        console.log(err)
    }
})