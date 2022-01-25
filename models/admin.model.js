const mongoos = require('mongoose');

let adminSchema = new mongoos.Schema({
    fullname:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true


    },
    password:{
        type:Number,
        required :true

    },
    mobil:{
        type:Number,
        required :true

    },
    role:{
        type:String,
        required :true

    }
});
module.exports=mongoos.model('admin',adminSchema);