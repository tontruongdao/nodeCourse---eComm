const http = require('http');
const express = require("express")
const bodyParser = require('body-parser')

const app = express();

// Registers a middleware, will parse the body passed in the form
app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req, res, next) => {
    // console.log("I'm another middleware");
    res.send('<Form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></Form>');
});

app.post("/product", (req, res, next) => {
    // extracting the form
    console.log(req.body);
    res.redirect("/");
})

app.use("/", (req, res, next) => {
    res.send("<h1>Hello from Express!</h1>");
    // console.log("I'm a middleware");
});

const server = http.createServer(app);

server.listen(3000);