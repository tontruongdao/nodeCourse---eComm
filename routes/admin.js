const express = require('express')
const path = require('path');

const adminController = require('../controllers/admin') //This takes all the function in the imported file.

const router = express.Router();

// This is reached through "/admin/add-product" => GET request
router.get("/add-product", adminController.getAddProduct);


// This is reached through '/admin/products' => GET request
router.get('/products', adminController.getProducts);

// This is reached throught "/admin/add-product" => POST request
router.post("/add-product", adminController.postAddProduct);

// module.exports = router; // Single export in the file
module.exports = router;