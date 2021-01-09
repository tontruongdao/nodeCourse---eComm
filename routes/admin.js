const express = require('express')
const path = require('path');

const rootDir = require("../helper/path")

const router = express.Router();

const products = [];

// This is reached throught "/admin/add-product" => GET request
router.get("/add-product", (req, res, next) => {
    // console.log("I'm another middleware");
    // res.send('<Form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></Form>');
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

// This is reached throught "/admin/add-product" => POST request
router.post("/add-product", (req, res, next) => {
    // extracting the form
    products.push({ title: req.body.title });
    res.redirect("/");
});

// module.exports = router; // Single export in the file

exports.routes = router;
exports.products = products;