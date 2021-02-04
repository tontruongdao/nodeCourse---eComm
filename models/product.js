// const fs = require('fs'); // Core file system package
// const path = require('path'); // Core path package 
const db = require('../helper/database')

const Cart = require('./cart');

// const p = path.join(
//     path.dirname(process.mainModule.filename), // Join takes 3 argument
//     'data', // In a data folder
//     'products.json' // In a json file
// ); 

// const getProductsFromFile = (cb) => {

//     fs.readFile(p, (err, fileContent) => {
//         if (err) {
//             return cb([]);
//         } else {
//             return cb(JSON.parse(fileContent));
//         }
//     })
// }

module.exports = class Product {
    
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg";
        this.description = description;
        this.price = price;
        // "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg"
    }

    // This function reads our file in the path and adds the saved item whether it countains something or not.
    save() {

        // getProductsFromFile(products => {
        //     if (this.id) {
        //         const existingProductIndex = products.findIndex(prod => prod.id === this.id)
        //         const updatedProducts = [...products];

        //         updatedProducts[existingProductIndex] = this;
        //         fs.writeFile(p, JSON.stringify(updatedProducts), (err) => { // Converts to JSON and updates our file
        //             console.log(err)
        //         }) 
        //     } else {
        //         this.id = Math.random().toString(); // Gived a unique ID
        //         products.push(this); // This will lose this content and will not refer to the class if we do not use an arrow function
        //         // Adds content to our file
        //         fs.writeFile(p, JSON.stringify(products), (err) => { // Converts to JSON and updates our file
        //             console.log(err)
        //         }) 
        //     }
        // });

        // fs.readFile(p, (err, fileContent) => {
            // let products = [];
            // if (!err) {
            //     products = JSON.parse(fileContent); // Takes incoming JSON and convert a JS array or object
            // }
        // })
    }

    // This fetches all our saved items.
    // The purpose of the static keyword is to be able to use a member without creating an instance of the class.
    static fetchAll() { // Used callback to make our code asynchronous
        // getProductsFromFile(cb);
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        // getProductsFromFile(products =>{
        //     const product = products.find(p => p.id === id);
        //     cb(product);
        // })
    }

    static deleteById(id) {
        // getProductsFromFile(products => {
        //     // We want to keep all the items that are not equal to our selected product, this is the reason
        //     // we use "filter" instead of "findId"
        //     const product = products.find(prod => prod.id ===id);
        //     const updatedProducts = products.filter(prod => prod.id !== id );
        //     fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        //         if (!err) {
        //             Cart.deleteProduct(id, product.price)
        //         }
        //     })
        // })
    }
}