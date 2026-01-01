const user = require('../model/user');
const bcrypt = require('bcrypt');
const validator = require('validator');
const {handleSignupValidation} = require('../validation/signupValidation');

async function handleSignup(req,res) {
    const {username,email,password} = req.body;
    try {
        handleSignupValidation(req);

       const hassedPassword =  await bcrypt.hash(password,10);
    await user.create({
        email,
        username,
        password:hassedPassword,
    })
    return res.json({'message':'user signedup succesfully',
        'status':'ok'
    });
    } catch (error) {
        res.status(400).json({'error': error.message})
    }
}

async function handleLogin(req,res) {
    const {email,password} = req.body;
    
    
    try {
        if (!email || !password) throw new Error("invalid credentials");
        const userFound =  await user.findOne({email:email});
        if(!userFound) throw new Error("invalid credentials");
        const passwordMatched =  await bcrypt.compare(password,userFound.password);
        if(!passwordMatched) throw new Error("invalid credentials");
        res.json({
            'message':"user varified sucessfully",
            'status':"succesfull"
        });
    } catch (err) {
         res.status(401).json({error : err.message})
         console.log(err);
         
    }
    
}

module.exports = {handleSignup,handleLogin};