const user = require('../model/user');


async function handleSignup(req,res) {
    const {username,email,password} = req.body;

    await user.create({
        email,
        username,
        password
    })
    return res.json({'message':'user signedup succesfully',
        'status':'ok'
    });
}

module.exports = {handleSignup};