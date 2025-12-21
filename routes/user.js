const express = require('express');
const {handleSignup} = require('../controller/user');
const userRouter = express.Router();

userRouter.post("/",handleSignup);




module.exports = userRouter;