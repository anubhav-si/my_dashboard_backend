const mongoose = require('mongoose');
const validator = require('validator');
const product = require('./productSchema');
const userSchema = new  mongoose.Schema({
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
       
    },
    role:{
        type:String,
        enum:["user","admin"],
        trim:true,
        default:true,
    },
    wishlist:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
    },
    ],
    addresses:[
        {
            fullName: String,
            phone: String,
            street: String,
            city: String,
            state: String,
            pincode: String,
            country:{type: String,default: "india"},
        }
    ],
    isActive: {
        type: Boolean,
        default: true,
    }
},{
    timestamps:true
});

const user = mongoose.model('duser',userSchema);


module.exports = user;