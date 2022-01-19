require('./models/db');


const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3001 ;



let app = express();
app.use(express.json())

const admin= require('./routes/admin')
app.use('/admin', admin)


app.listen(PORT,()=>{
    console.log(`express server start port ${PORT}`);
});

// app.get('/',(req,res)=>{
//     res.send("alo")
// })