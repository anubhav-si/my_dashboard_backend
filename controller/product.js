const product = require("../model/productSchema");
const {uploadToCloudinary} = require("../services/cloudinary");


async function handleAddProduct(req,res) {
    try {
        const {name,description,category,price} = req.body;

        if (!name || !description || !category || !price) {
            throw new Error("all fields are required ");
        }
        if(!req.file){
            throw new Error("product image is required");
        }
        const cloudinaryresult = await uploadToCloudinary(req.file.path);
        if (!cloudinaryresult) {
            throw new Error("Image upload failed");  
        }

        const newproduct = await product.create({
            name,
            description,
            category,
            price,
            images:[
                {
                    url: cloudinaryresult.secure_url,
                    publicId: cloudinaryresult.public_id,

                }
            ]

        })
        return res.status(201).json({
            status:"ok",
            message:"Product added successfully",
            product:newproduct,
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status:"error",
            error:error.message,
        })
        
        
    }

    
}



module.exports = {handleAddProduct};