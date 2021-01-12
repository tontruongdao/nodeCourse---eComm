const express = require("express");
const path = require('path');

// const rootDir = require("../helper/path")
// const adminData = require("./admin")
const productsController = require('../controllers/products')

const router = express.Router();



// "get" uses an exact match instead of a path that starts with the first argument.
router.get("/", productsController.getProducts );

module.exports = router;