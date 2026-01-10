const mongoose = require("mongoose");
const { trim } = require("validator");

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        }
    ],
    isGroupChat:{
        type:Boolean,
        default:false,
    },
    groupName:{
        type:String,
        trim:true,
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",

    },
    lastMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message",
    }
},{
    timestamps:true,
})


const conversation = mongoose.model("conversation",conversationSchema);


module.exports = conversation;