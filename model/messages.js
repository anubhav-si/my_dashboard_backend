const mongoose = require("mongoose");
const user = require("./user");
const conversation = require("./conversation");


const messageSchema = new mongoose.Schema({
    conversation:{
        type:mongoose.Schema.ObjectId,
        ref:"conversation"
    },
    sender:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:true,
    },
    content:{
        type:String,
        trim:true,
    },
    messageType:{
        type:String,
        enum:["text","image","file"],
        default:"text"
    },
    seenBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }
    ]
},
{
    timestamps:true,
})

messageSchema.index({ conversation: 1, createdAt: 1 });
const message = mongoose.model("message",messageSchema);

module.exports = message;