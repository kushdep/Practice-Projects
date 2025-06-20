const express = require('express')
const app = express()
const fs = require('fs')

app.listen(3000, () => { console.log('listening on port 3000') })

app.use(bodyParser.json());
app.use(express.static('public'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/cart', async (req, res) => {
    const cartData = await fs.readFile('./cart-data.json', 'utf-8')
    res.json(JSON.parse(cartData))
})

app.post('/cart', async (req, res) => {
    const cartData = req.body.order;

    if (cartData === null || cartData.product === null || cartData.product.length === 0) {
        return res
            .status(400)
            .json({ message: 'Missing data.' });
    }

    const orders = await fs.readFile('./cart-data.json', 'utf8')
    const allOrders = JSON.parse(orders)
    const existingProduct = allOrders.find((p) => p.id === cartData.product.id)

    if (!existingProduct) {
        const newData = {
            ...cartData,
            totalPrice: cartData.price,
            quantity: 1,
            id: (Math.random() * 1000).toString()
        }
        allOrders.push(newData)
    } else {
        existingProduct.quantity++
        existingProduct.totalPrice += existingProduct.price
        
    }


})


