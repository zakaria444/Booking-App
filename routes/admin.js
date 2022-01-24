const express = require("express");
const admin =require('../models/admin.model')

const router=express.Router()

//get all admin
router.get('/',async (req,res)=>{

try{
    const admines = await admin.find()
    res.json(admines)

}catch(err){
    res.status(500).json({message:err.message})

}
})

router.post('/add',async (req,res)=>{
    const admines = new  admin({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        mobil: req.body.mobil,
    })
    try{
      
        const newadmin =await admines.save();
        res.status(201).json(newadmin)

    }catch(err){
        res.status(400).json({message:err.message})
    
    }
    })


    router.post('/login',async (req,res)=>{
        try{
            const newadmin =await admin.findOne({email:req.body.email});
            // res.json(newadmin)
            if(newadmin.password==req.body.password){
                
                res.json("Login Succeeded")
            }else{
                res.status(401).json("login Incorect")//No autorisi
            }
    
        }catch(err){
            res.status(400).json({message:err.message})//Bad request
        }
        })

module.exports =router