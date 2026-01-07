const jwt = require('jsonwebtoken');
const user = require('../model/user');


async function jwtAuthorization(req,res,next) {
    const {token} = req.cookies
   
    try {
            if (!token) {
            throw new Error("cookie expires");
            
        }
        // console.log(token);
        
        const decoded = await jwt.verify(token,"Dashboard@123");
        // console.log(decoded);
        
        const {_id} = decoded;
        const founduser = await user.findById(_id);
        if (!founduser) {
            return res.status(401).json({ error: "User not found" });
            }
        req.user = founduser;
        // console.log("authorization successfull");
        
        next();
    } catch (error) {
        console.log(error.message);
        
         return res.status(401).json({error : "Invalid or expired token"}) ;
    }
   
}

module.exports = {jwtAuthorization};