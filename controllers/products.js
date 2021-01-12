
// const products = [];

const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    // console.log("I'm another middleware");
    // res.send('<Form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></Form>');
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    // extracting the form
    // products.push({ title: req.body.title });

    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    // res.send("<h1>Hello from Express!</h1>");
    // console.log("I'm a middleware");

    // This will select the absolute path of our machine, we resolve this by importing the "path" module.
    // "__dirname" selected our root folder.
    // The join method will concatenate the different arguments, since this can we read by Linux and iOS.
    
    // console.log(adminData);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));

    const products = Product.fetchAll();

    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      });
}