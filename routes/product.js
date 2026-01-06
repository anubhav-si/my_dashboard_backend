const express = require("express");
const {handleAddProduct} = require("../controller/product");
const upload = require("../middleware/multerUploads")

const productRouter = express.Router();




productRouter.post("/addproduct",upload.single("productimage"),handleAddProduct);



module.exports = productRouter;