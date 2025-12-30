const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("invalid email format");
            }
        }


    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:4,
        maxLength:8
    },
    designation:{
        type:String,
        default:"employe",
        trim:true,
        maxLength:15
    },
},{
    timestamps:true
});

const user = mongoose.model('duser',userSchema);


module.exports = user;