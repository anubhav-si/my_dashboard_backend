const express = require('express');
const {handleSignup,handleLogin,handleProfileinfo} = require('../controller/user');
const userRouter = express.Router();

userRouter.post("/signup",handleSignup);
userRouter.post("/login",handleLogin);
userRouter.get("/me",handleProfileinfo);




module.exports = userRouter;