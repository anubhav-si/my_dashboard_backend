const user = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const {handleSignupValidation} = require('../validation/signupValidation');

async function handleSignup(req,res) {
    const {username,email,password,terms} = req.body;
    try {
       handleSignupValidation({ username, email, password,terms});

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
        return res.status(400).json({'error': error.message})
    }
}

async function handleLogin(req,res) {
    const founduser = req.founduser;
    try { 
        const token = await jwt.sign({_id:founduser._id},"Dashboard@123")
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
        })
        res.json({
            message:"user varified sucessfully",
            status:"succesfull",
            user:{
                _id: founduser._id,
                username: founduser.username,
                email:founduser.email,
                designation: founduser.designation,
                createdAt: founduser.createdAt,
            }
        });
    } catch (error) {
          return res.status(401).json({error : error.message}) ;
         
         
    }
    
}
async function handleProfileinfo(req,res) {
    
   
    try {
        const user = req.user
        if (!user) return;
        res.json(user)
    } catch (error) {
         return res.status(401).json({error : error.message}) ;
    }
}

async function handleLogout(req,res) {
        try {
        

            res.clearCookie("token",{
                httpOnly:true,
                secure:false,
                sameSite:"lax",
            })
            res.status(200).json({
                success: true,
                message: "Logged out successfully",
            })

            
        } catch (err) {
            res.status(400).json({
                success:false,
            })
        }
}

module.exports = {handleSignup,handleLogin,handleProfileinfo,handleLogout};