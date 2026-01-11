



async function handleSendMessage(req,res) {
       try {
         const sender = req.user;

            const {message} = req.body;    
            const {receiver} = req.params
            if (!message || !receiver) {
                res.status("401").json({status:"message not sent"})

            }
            
        
       } catch (err) {
        
       }
}



module.exports = {handleSendMessage};