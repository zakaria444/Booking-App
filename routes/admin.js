const express = require("express");
const admin =require('../models/admin.model')
const router=express.Router()

const dotenv = require('dotenv');
dotenv.config({path:'config.env'})
const JWTT = process.env.JWTT
const JWTT2 = process.env.JWTT2


const JWT =require('jsonwebtoken')


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


    router.get('/login',async (req,res)=>{
        try{
            const newadmin =await admin.findOne({email:req.body.email});
            // res.json(newadmin)
            if(newadmin.password==req.body.password){
                const token = JWT.sign(
                    { user: newadmin.email,},
                    process.env.JWTT,
                    {
                      expiresIn: "2h",
                    }
                  );
                  tokenn=token;
                res.json(tokenn)
            }else{
                res.status(401).json("login Incorect")//No autorisi
            }
    
        }catch(err){
            res.status(400).json({message:err.message})//Bad request
        }
        })


        router.get('/auth',async (req,res)=>{
            try{
                const token = req.body.token;
                // res.json(newadmin)
                if (token) {
  
                    // Verify the token using jwt.verify method
                    const decode = JWT.verify(token, JWTT);
                  
                    //  Return response with decode data
                    res.json({
                      login: true,
                      data: decode,
                    });
                  }else{
                  
                    // Return response with error
                    res.json({
                      login: false,
                      data: "error",
                    });
                }
                
        
            }catch(err){
                res.status(400).json({message:err.message})//Bad request
            }
            })

module.exports =router