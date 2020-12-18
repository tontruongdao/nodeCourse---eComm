const express = require('express')

const router = express.Router();


// This is reached throught "/admin/add-product" => GET request
router.get("/add-product", (req, res, next) => {
    // console.log("I'm another middleware");
    res.send('<Form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></Form>');
});

// This is reached throught "/admin/add-product" => POST request
router.post("/add-product", (req, res, next) => {
    // extracting the form
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;