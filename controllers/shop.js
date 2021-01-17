
// const products = [];

const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    // res.send("<h1>Hello from Express!</h1>");
    // console.log("I'm a middleware");

    // This will select the absolute path of our machine, we resolve this by importing the "path" module.
    // "__dirname" selected our root folder.
    // The join method will concatenate the different arguments, since this can we read by Linux and iOS.
    
    // console.log(adminData);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));

    const products = Product.fetchAll((products) => { // Used an anonymous function as a callback
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        });
    });

}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => { // Used an anonymous function as a callback
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/chechout',
        pageTitle: 'Checkout'
    })
}