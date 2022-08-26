const express = require('express');
const products = require("./products.json");
const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
    res.send({ products });
})

app.post('/products/create', (req, res) => {
    const newProduct = [...products, req.body];
    res.send(newProduct);
})

app.get('/products/:productid', (req, res) => {
    const newProducts = products.filter((product) => product.id == req.params.id);
    console.log(newProducts);
    res.send(newProducts);
})

app.delete('/products/:productid', (req, res) => {
    const newProducts = products.filter((product) => product.id == req.params.id);
    console.log(newProducts);
    res.send(newProducts);
})

app.listen(1234, function () {
    console.log('listening on port 1234');
})
