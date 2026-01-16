const express = require("express");
const {handleAddProduct,handleGetAllProduct} = require("../controller/product");
const {jwtAuthorization} = require("../middleware/jwtAuthorization")
const upload = require("../middleware/multerUploads")

const productRouter = express.Router();




productRouter.post("/addproduct",jwtAuthorization,upload.single("image"),handleAddProduct);
productRouter.get("/getproducts",jwtAuthorization,handleGetAllProduct);



module.exports = productRouter;