const validator = require('validator');

 function handleSignupValidation(req,res) {
    const {email,username,password,terms} = req.body;

    if (!email) throw new Error("please enter email");
    if (!validator.isEmail(email)) throw new Error("enter a valid email");

    if (!username) throw new Error("please enter username");
    if (username.length > 10) throw new Error("username should be less than 10 character");
    
    if (!password) throw new Error("please enter password");
    if (password.length < 4 || password.length > 8) throw new Error("password should be in between 4 - 8 character");
    
   if(!terms) throw new Error("please accept terms & condition");
}

module.exports = {handleSignupValidation};