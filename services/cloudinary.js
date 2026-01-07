const cloudinary = require("cloudinary").v2;
const fs = require("fs");
  cloudinary.config({ 
        cloud_name: 'dju102ck5', 
        api_key: '565769959533245', 
        api_secret: 'LupUFyhovSI3JbXMGe-WfTcVx7s'
    });

    const uploadToCloudinary = async (filepath) => {    
        try {
            if (!filepath) return null;
            const result = await cloudinary.uploader.upload(filepath,{
                folder:"products",
                resource_type:"auto"
            })
            // console.log(result.url);
             fs.unlinkSync(filepath); 
            return {
                url:result.secure_url,
                publicId:result.public_id,
            };
            
        } catch (error) {
            fs.unlinkSync(filepath);
            return null;
            

        }
        
    }
    module.exports = {uploadToCloudinary};