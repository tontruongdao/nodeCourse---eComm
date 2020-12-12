const http = require('http');
const express = require("express")
const bodyParser = require('body-parser')

const adminRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

// Registers a middleware, will parse the body passed in the form
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoutes);


const server = http.createServer(app);

server.listen(3000);