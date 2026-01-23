const express = require("express");
const {handleGetAllProduct24} = require("../controller/product");
const ProductRouter24 = express.Router();

ProductRouter24.get("/getAllProduct",handleGetAllProduct24);








module.exports = ProductRouter24;