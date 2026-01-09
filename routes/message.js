const express = require("express");
const {handleSendMessage} = require("../controller/message");


const messageRouter = express.Router();

messageRouter.post("/send/:receiver",handleSendMessage)



module.exports = messageRouter;