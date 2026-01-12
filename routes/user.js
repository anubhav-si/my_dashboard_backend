const express = require('express');
const {handleSignup,handleLogin,handleLogout,handleProfileinfo} = require('../controller/user');
const {logInAuth} = require('../middleware/logInAuth');
const {jwtAuthorization} = require('../middleware/jwtAuthorization');

const userRouter = express.Router();

userRouter.post("/signup",handleSignup);
userRouter.post("/login",logInAuth,handleLogin);
userRouter.get("/profile",jwtAuthorization,handleProfileinfo);
userRouter.get("/logout",handleLogout);






module.exports = userRouter;