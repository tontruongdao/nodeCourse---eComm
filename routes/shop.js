const express = require("express");
const path = require('path');

// const rootDir = require("../helper/path")
// const adminData = require("./admin")
const shopController = require('../controllers/shop')

const router = express.Router();



// "get" uses an exact match instead of a path that starts with the first argument.
router.get("/", shopController.getIndex );

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

module.exports = router;