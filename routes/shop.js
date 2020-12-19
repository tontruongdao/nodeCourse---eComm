const express = require("express");
const path = require('path');

const rootDir = require("../helper/path")

const router = express.Router();



// "get" uses an exact match instead of a path that starts with the first argument.
router.get("/", (req, res, next) => {
    // res.send("<h1>Hello from Express!</h1>");
    // console.log("I'm a middleware");

    // This will select the absolute path of our machine, we resolve this by importing the "path" module.
    // "__dirname" selected our root folder.
    // The join method will concatenate the different arguments, since this can we read by Linux and iOS.
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;