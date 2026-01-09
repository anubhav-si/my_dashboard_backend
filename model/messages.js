const mongoose = require("mongoose");
const user = require("./user");


const messageSchema = mongoose.Schema({
    sender:{
        type:mongoose.Schema.ObjectId,
        ref:user
    },
    receiver:{
        type:mongoose.Schema.ObjectId,
        ref:user
    },
    messages:{
        type:String,
    }
})

const message = mongoose.model("message",messageSchema);

module.exports = message;