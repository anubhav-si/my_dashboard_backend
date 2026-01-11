const express = require("express");
const {handleSendMessage} = require("../controller/message");
const { jwtAuthorization } = require("../middleware/jwtAuthorization");


const messageRouter = express.Router();

messageRouter.post("/send/:receiver",jwtAuthorization,handleSendMessage)



module.exports = messageRouter;