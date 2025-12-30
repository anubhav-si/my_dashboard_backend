const user = require('../model/user');
const {handleSignupValidation} = require('../validation/signupValidation');

async function handleSignup(req,res) {
    const {username,email,password} = req.body;
    try {
        handleSignupValidation(req);

    await user.create({
        email,
        username,
        password
    })
    return res.json({'message':'user signedup succesfully',
        'status':'ok'
    });
    } catch (error) {
        res.status(400).json({'error':error.message})
    }
}

async function handleLogin(req,res) {
    const body = req.body;
    
}

module.exports = {handleSignup};