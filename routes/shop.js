const express = require("express")

const router = express.Router();

// "get" uses an exact match instead of a path that starts with the first argument.
router.get("/", (req, res, next) => {
    res.send("<h1>Hello from Express!</h1>");
    // console.log("I'm a middleware");
});

module.exports = router;