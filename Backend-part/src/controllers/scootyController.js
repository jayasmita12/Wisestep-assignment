const express = require("express")
const Scooty = require("../models/schootyList")
const router = express.Router()


router.get("", async(req,res)=>{
    try{
        const scootys = await Scooty.find()
        .lean().exec()
        return res.status(200).send({scootys : scootys})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

router.post("", async(req,res)=>{
    try{
        const scooty = await Scooty.create(req.body)
        return res.status(201).send({scooty : scooty})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

module.exports=router