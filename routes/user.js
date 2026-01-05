const express = require('express');
const {handleSignup,handleLogin,handleProfileinfo} = require('../controller/user');
const {logInAuth} = require('../middleware/logInAuth');
const userRouter = express.Router();

userRouter.post("/signup",handleSignup);
userRouter.post("/login",logInAuth,handleLogin);





module.exports = userRouter;