const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    // console.log("I'm another middleware");
    // res.send('<Form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></Form>');
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product' 
    });
}



exports.postAddProduct = (req, res, next) => {
    // extracting the form
    // products.push({ title: req.body.title });

    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const product = new Product(null, title, imageUrl, description, price);
    product.save();
    console.log(product)
    res.redirect("/");
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }

    const prodId = req.params.productId;
    
    Product.findById(prodId, product => {
        if (!product) {
        return res.redirect('/');
        }
        res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
        });
    });
}

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;

    const updatedProduct = new Product(prodId, updatedTitle, updatedPrice, updatedImageUrl, updatedDesc);
    updatedProduct.save();
    res.redirect('/admin/products')
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