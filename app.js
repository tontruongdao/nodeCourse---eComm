const http = require('http');
const express = require("express")

const app = express();

app.use((req, res, next) => {
    console.log("I'm the first middleware");
    next(); // Next allow request to continu to the next code of line(middleware).
});

app.use((req, res, next) => {
    console.log("I'm another middleware");
});

const server = http.createServer(app);

server.listen(3000);