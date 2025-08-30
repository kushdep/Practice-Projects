const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const categories = ['fruit','vegetable','dairy']
const Product = require('./models/Product.js')

mongoose.connect('mongodb://localhost:27017/farmStand').then(()=>console.log("CONNECTED")).catch((err)=>console.log(err))

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/products/new',(req,res)=>{
    res.render('products/new',{categories})
})

app.post('/products',async(req,res)=>{
    const newPrd = new Product(req.body)
    await newPrd.save()
    res.redirect(`/products/${newPrd._id}`)
})

app.get('/products',async(req,res)=>{
    const {category}=req.query
    console.log('1'+category)
    if(category){
        const products = await Product.find({category})
        console.log("2"+category)
        res.render("products/index",{products,category})
    }else{
        const products = await Product.find({})
        console.log("3"+category)
        res.render("products/index",{products,category:"ALL"})
    }
})

app.get('/products/:id',async(req,res)=>{
    const {id}  = req.params
    const product = await Product.findById({_id:id})
    res.render("products/show",{product})
})

app.delete('/products/:id',async(req,res)=>{
    const {id}  = req.params
    await Product.findByIdAndDelete(id)
    res.redirect("/products")
})

app.get('/products/:id/edit',async(req,res)=>{
    const {id}=req.params
    const prd = await Product.findById(id)
    res.render('products/edit',{prd,categories})
})

app.put('/products/:id',async(req,res)=>{
        const {id}=req.params
   const prd = await Product.findByIdAndUpdate(id,req.body,{runValidators:true, new:true})
    res.redirect(`/products/${prd._id}`)
})

app.listen(7171,()=>{
    console.log("PORT 7171")
})

app.get('/product/:')























