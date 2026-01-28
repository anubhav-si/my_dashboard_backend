const mongoose = require('mongoose');
const product = require('../model/productSchema');

const orderItemSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "product",
        required:true,
    },
    name:String,
    image:String,

    Quantity:{
        type: Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
});


const orderSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required: true,

        },
        orderItems: [orderItemSchema],

        shippingAddress:{
            fullName:String,
            phone:String,
            street: String,
            city:String,
            state:String,
            pincode: String,
            country: String,
        },
        PaymentMethod:{
            type:"string",
            enum:["COD","CARD","UPI"],
            required: true,
        },
        paymentResult:{
            transactionId: String,
            Status: String,
        },
        itemsPrice: Number,
        taxPrice: Number,
        shippingPrice:Number,
        totalPrice:Number,

        orderStatus: {
            type: String,
            enum: ["PLACED", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"],
            default:"PLACED",
        },
        isPaid: {
            type: Boolean,
            default: false,
        },
        paidAt:Date,
        deliveredAt:Date,
    },
    {timestamps:true}

);


module.exports = mongoose.model("order",orderSchema);