'use strict';
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'config.env'})
const DATABASE = process.env.DATABASE_URL;

    mongoose.connect(DATABASE,{
        useNewUrlParser : true,
    },(err)=>{
        if(!err){console.log('MongoDB connection succeeded ')
    }else{console.log('error in Database :'+err)}
    });

require('./admin.model');