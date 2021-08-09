const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


const PRODUCTS = [
    {id: 101, name: 'Macbook pro', price: 3000, description: 'This is apple brand'},
    {id: 102, name: 'Oneplus 8t', price: 5000, description: 'This is oneplus brand'},
    {id: 103, name: 'Dell laptop', price: 7000, description: 'This is Dell brand'},
    {id: 104, name: 'Dell monitor', price: 3000, description: 'Dell monitor'},
    {id: 105, name: 'Macbook pro 15', price: 5000, description: 'This is apple brand'}
];

const CARTS = [
    {name: 'Dell laptop', price: 7000, quantity: 3},
    {name: 'Dell monitor', price: 3000, quantity: 4},
];


app.get('/', (req, res) => {
    res.render('product', {
        product: PRODUCTS
    });
});


app.get('/mycart', (req, res) => {
    res.render('shoppingCart', {
        product: CARTS
    });
});

app.listen(3002);