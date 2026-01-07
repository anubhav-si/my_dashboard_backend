const express = require("express");
const {handleAddProduct} = require("../controller/product");
const {jwtAuthorization} = require("../middleware/jwtAuthorization")
const upload = require("../middleware/multerUploads")

const productRouter = express.Router();




productRouter.post("/addproduct",jwtAuthorization,upload.single("image"),handleAddProduct);



module.exports = productRouter;