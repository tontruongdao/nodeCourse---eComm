const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    // console.log("I'm another middleware");
    // res.send('<Form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></Form>');
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    // extracting the form
    // products.push({ title: req.body.title });

    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const product = new Product(title, imageUrl, description, price);
    product.save();
    console.log(product)
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        })
    })
}