const product = require("../model/productSchema");
const {uploadToCloudinary} = require("../services/cloudinary");


async function handleAddProduct(req,res) {
    try {
        const {name,description,price,category} = req.body;

        if (!name || !description  || !price || !category) {
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
            category,
            images:[
                {
                    url: cloudinaryresult.url,
                    publicId: cloudinaryresult.public_id,

                }
            ],
            productCreatedBy:req.user._id,

        })
        return res.status(201).json({
                success: true,
                message: "Product added successfully",
                product: newproduct,
                });

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            status:"error",
            error:error.message,
        })
        
        
    }

    
}
 async function handleGetAllProduct(req,res) {
    try {
        
        const products = await product.find({});
        
        
        return res.status(200).json({
            success:true,
            count:products.length,
            products,
        });
        
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success:true,
            message:"failed to fetch products ",
        });
    }
 }


 async function handleGetAllProduct24(req,res) {
    try {
        const products = await product.find({});
        if(!products) throw new Error("products not found");
        
        return res.status(200).json({
                    success:true,
                    count:products.length,
                    products,
                });
    } catch (error) {
        console.log(error);
        
         return res.status(500).json({
            success:true,
            message:"failed to fetch products ",
        });
    }
 }



module.exports = {handleAddProduct,handleGetAllProduct,handleGetAllProduct24};