const user = require('../model/user');
const bcrypt = require('bcrypt');

async function logInAuth(req,res,next) {
    const {email,password} = req.body
    try {
        if (!email || !password) throw new Error("invalid credentials");
                const userFound =  await user.findOne({email:email});
                if(!userFound) throw new Error("invalid credentials");
                const passwordMatched =  await bcrypt.compare(password,userFound.password);
                if(!passwordMatched) throw new Error("invalid credentials");
                req.founduser = userFound;
                next();
    } catch (error) {
        return res.status(400).json({error:error.message});
        
    }
}

module.exports = {logInAuth};