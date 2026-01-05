

const mongoose = require('mongoose');
const user = require("./user");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:5,
    },
    category: {
      type: String,
      required: true,
    },
    images:[
        {
            url:{type:String,required:true},
            publicId:{type:String}
        }
    ],
    productCreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    isActive: {
        type: Boolean,
        default: true,
    }
},{timestamps:true}
);
const product = mongoose.model("product",productSchema);
module.exports = product;