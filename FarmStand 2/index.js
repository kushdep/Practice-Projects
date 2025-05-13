const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const AppError = require('./AppError')
const Farm = require('./models/farm')
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))



//FARM ROUTES
app.get('/farms/new',(req,res)=>{
    res.render('farms/new')
})

app.get('/farms/:id/products/new',async(req,res)=>{
    const {id} = req.params
    const farm = await Farm.findById(id)
    res.render('products/new',{categories,farm})
})

app.post('/farms/:id/products',async(req,res)=>{
    const {id}= req.params
    const {name,price,category} = req.body
    const thisFarm=await Farm.findById(id)
    const NewPrd = new Product({name,price,category})
    NewPrd.farm=thisFarm
    thisFarm.products.push(NewPrd)
    await NewPrd.save()
    await thisFarm.save()
    res.redirect(`/farms/${id}`)
})

app.get('/farms/:id',async(req,res)=>{
    const {id} = req.params
    const farm = await Farm.findById(id).populate('products')
    res.render('farms/show',{farm})
})

app.get('/farms',async(req,res)=>{
    const farm = await Farm.find({})
    res.render('farms/index',{farm})
})

app.post('/farms',async(req,res)=>{
    const farm = new Farm(req.body)
    await farm.save();
    res.redirect('/farms')
})

// app.delete('/farms/:id',async(req,res)=>{
//     const {id} = req.params;
//     const farm = await Farm.findById(id);
//     DeleteProducts(farm)
//     await Farm.findByIdAndDelete(id)
//     res.redirect('/farms')
// })

// async function DeleteProducts(farm){
//     for(let i=0;i<farm.products.length;i++){
//         await Product.findByIdAndDelete(farm.products[i])
//         console.log("deleted "+farm.products[i])
//     }
// }


app.delete('/farms/:id',async(req,res)=>{
    const farm = await Farm.findByIdAndDelete(req.params.id)
     
    res.redirect('/farms')
})




//PRODUCT ROUTES
const categories = ['fruit', 'vegetable', 'dairy'];

function WrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(e => next(e))
    }
}

app.get('/products', WrapAsync(async (req, res,next) => {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category })
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({})
            res.render('products/index', { products, category: 'All' })
        }
}))

app.get('/products/new', WrapAsync((req, res) => {
    res.render('products/new', { categories })
}))

app.post('/products', WrapAsync(async (req, res, next) => {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
}))

app.get('/products/:id', WrapAsync(async (req, res,next) => {
        const { id } = req.params;
        const product = await Product.findById(id).populate('farm','name')
        if(!product){
            return next(new AppError(404,"Product not found"))
        }
        res.render('products/show', { product })
}))

app.get('/products/:id/edit',WrapAsync(async (req, res,next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product){
            throw next(new AppError(404,"Product not found"))
        }
        res.render('products/edit', { product, categories })
}))

app.put('/products/:id', WrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);
}))

app.delete('/products/:id', WrapAsync(async (req, res,next) => {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.redirect('/products');
}))


// app.use((err,req,res,next)=>{
//     console.log(err.name)
//     return new AppError(400,`Validation Failed.... ${err.message}`)
// })


// app.use((err,req,res,next)=>{
//     const {status=500, message="something went wrong",name} = err
//     res.status(status).send(message)
// })


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


