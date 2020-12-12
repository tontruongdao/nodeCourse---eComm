const express = require('express')

const router = express.Router();


router.get("/add-product", (req, res, next) => {
    // console.log("I'm another middleware");
    res.send('<Form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></Form>');
});

router.post("/product", (req, res, next) => {
    // extracting the form
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;