const http = require('http');
const express = require("express")
const bodyParser = require('body-parser')
const path = require('path')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// Registers a middleware, will parse the body passed in the form
app.use(bodyParser.urlencoded({extended: false}));
// This is required to serve static file, as the client is not permitted to access the other files.
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
})

const server = http.createServer(app);

server.listen(3000);