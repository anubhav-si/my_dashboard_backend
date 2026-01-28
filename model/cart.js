const mongoose = require("mongoose");


const cartItemSchema =new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
        min: 1,
        default: 1,
    },
    priiceAtAddTime: {
        type: Number,
        required: true,
    },
    },

);

const cartSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "user",
            required:true,
            unique: true,
        },
        items:[cartItemSchema],
        subtotoal:{
            type:Number,
            default:0,
        },
        updatedAt:{
            type:Date,
            default:Date.now,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        },
    },{
        timestamps:true
    }
)
const cart = mongoose.model("cart",cartSchema);
module.exports = cart;