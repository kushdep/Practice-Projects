const mongoose = require('mongoose')

const Product = require('./models/Product.js')

mongoose.connect('mongodb://localhost:27017/farmStand').then(()=>console.log("CONNECTED")).catch((err)=>console.log(err))

const seedProducts = [
    { name: 'Grapefruit', price: 10, category: 'fruit' },
    { name: 'Apple', price: 5, category: 'fruit' },
    { name: 'Carrot', price: 3, category: 'vegetable' }
];

Product.insertMany(seedProducts)
    .then(res => console.log(res))
    .catch(err => console.log(err));