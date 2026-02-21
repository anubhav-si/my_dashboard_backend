const cloudinary = require("cloudinary").v2;
const fs = require("fs");
  cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
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