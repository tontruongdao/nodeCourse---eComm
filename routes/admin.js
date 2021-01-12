const express = require('express')
const path = require('path');

const productsController = require('../controllers/products') //This takes all the function in the imported file.

const router = express.Router();

// This is reached throught "/admin/add-product" => GET request
router.get("/add-product", productsController.getAddProduct);

// This is reached throught "/admin/add-product" => POST request
router.post("/add-product", productsController.postAddProduct);

// module.exports = router; // Single export in the file

module.exports = router;