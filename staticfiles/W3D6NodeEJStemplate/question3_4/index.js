
const express = require('express');
const app = express();

const path = require('path');

app.use(express.urlencoded({
  extended: false
 }));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


const productRouter = require('./routes/product');
app.use('/product', productRouter);

const shoppingCartRouter = require('./routes/shoppingCart');
app.use('/shoppingCart', shoppingCartRouter);

app.listen(3002);