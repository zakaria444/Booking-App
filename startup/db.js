'use strict';
const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect(' mongodb://127.0.0.1:27017/booking',{
        useNewUrlParser : true,
        usefindAndModify:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    },(err)=>{
        if(!err){console.log('MongoDB connection succeeded ')
    }else{console.log('error in Database :'+err)}
    });
}