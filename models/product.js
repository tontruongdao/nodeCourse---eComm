const fs = require('fs'); // Core file system package
const path = require('path'); // Core path package 

const products = [];

module.exports = class Product {
    
    constructor(t) {
        this.title = t;
    }

    // This function reads our file in the path and adds the saved item whether it countains something or not.
    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename), // Join takes 3 argument
            'data', // In a data folder
            'products.json' // In a json file
        ); 

        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent); // Takes incoming JSON and convert a JS array or object
            }

            products.push(this); // This will lose this content and will not refer to the class if we do not use an arrow function
                                 // Adds content to our file

            fs.writeFile(p, JSON.stringify(products), (err) => { // Converts to JSON and updates our file
                console.log(err)
            }) 
        })
    }

    // This fetches all our saved items.
    static fetchAll() {

        const p = path.join(
            path.dirname(process.mainModule.filename), // Join takes 3 argument
            'data', // In a data folder
            'products.json' // In a json file
        ); 

        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return [];
            } 
            return JSON.parse(fileContent)
        })
    }
}