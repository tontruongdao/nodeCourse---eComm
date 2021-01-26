const express = require('express')
const path = require('path');

const adminController = require('../controllers/admin') //This takes all the function in the imported file.

const router = express.Router();

// This is reached through "/admin/add-product" => GET request
router.get("/add-product", adminController.getAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

// This is reached through '/admin/products' => GET request
router.get('/products', adminController.getProducts);

// This is reached throught "/admin/add-product" => POST request
router.post("/add-product", adminController.postAddProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

// module.exports = router; // Single export in the file
module.exports = router;