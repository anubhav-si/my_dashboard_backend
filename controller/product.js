const product = require("../model/productSchema");
const {uploadToCloudinary} = require("../services/cloudinary");


async function handleAddProduct(req,res) {
    try {
        const {name,description,price} = req.body;

        if (!name || !description  || !price) {
            throw new Error("all fields are required ");
        }
        if(!req.file){
            throw new Error("product image is required");
        }
        const cloudinaryresult = await uploadToCloudinary(req.file.path);
        if (!cloudinaryresult) {
            throw new Error("Image upload failed");  
        }
        // console.log(cloudinaryresult);
        
        const newproduct = await product.create({
            name,
            description,
            price,
            images:[
                {
                    url: cloudinaryresult.url,
                    publicId: cloudinaryresult.public_id,

                }
            ],
            productCreatedBy:req.user._id,

        })
        return res.status(201).json({
            statusMessage:"ok",
            message:"Product added successfully",
            product:newproduct,
        })

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            status:"error",
            error:error.message,
        })
        
        
    }

    
}



module.exports = {handleAddProduct};