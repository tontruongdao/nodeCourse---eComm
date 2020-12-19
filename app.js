const http = require('http');
const express = require("express")
const bodyParser = require('body-parser')
const path = require('path')

const adminRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

// Registers a middleware, will parse the body passed in the form
app.use(bodyParser.urlencoded({extended: false}));
// This is required to serve static file, as the client is not permitted to access the other files.
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

const server = http.createServer(app);

server.listen(3000);