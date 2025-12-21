const user = require('../model/user');


async function handleSignup(req,res) {
    const {username,email,password} = req.body;

    await user.create({
        email,
        username,
        password
    })
    return res.json({'status':'user signedup succesfully'});
}

module.exports = {handleSignup};