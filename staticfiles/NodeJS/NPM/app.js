// const express = require('express');
//
// const bodyParser = require('body-parser');
// const app = express();
//
// // it works as middleware
// const checkUrl = function (req, res, next) {
//     console.warn("current route is ", req.originalUrl);
//     next();
// }
//
// app.use(checkUrl);
// app.get('/', function (req, res) {
//    res.send("This is Home Page");
// });
// app.get('/login', function (req, res) {
//     res.send("This is Login Page");
// });
// app.get('/about', function (req, res) {
//     res.send("This is About Page");
// });
//
// app.listen(3000);

// const express = require('express');
// const path = require('path');
// const url = require('url');
// const session = require('express-session')
// const app = express();
//
// app.set('view engine', 'ejs');
//
// app.set('views', path.join(__dirname, "views"));
//
// app.use(express.urlencoded({ extended: false }));
//
// app.use(session({
//     resave: false,
//     saveUninitialized: false,
//     secret: 'salt for cookie signing',
// }));
//
// app.use(function (req, res, next) {
//     if (!req.session.cart) {
//         req.session.cart = {};
//     }
//     next();
// });
//
// app.get('/product/1', (req, res) => {
//     res.render("product", {
//         ...PRODUCTS.find(e => e.id === 1)
//     });
// });
//
// app.get('/product/2', (req, res) => {
//     res.render("product", {
//         ...PRODUCTS.find(e => e.id === 2)
//     });
// });
//
// app.get('/product/3', (req, res) => {
//     res.render("product", {
//         ...PRODUCTS.find(e => e.id === 3)
//     });
// });
//
// app.post('/addToCart', (req, res, next) => {
//     let item = req.body;
//
//     let exist = req.session.cart[item.name];
//     if (exist) {
//         exist.quantity += 1;
//     } else {
//         item.quantity = 1;
//         req.session.cart[item.name] = item;
//     }
//
//     res.redirect(url.format({
//         pathname: "/cart"
//     }));
// });
//
// app.get('/cart', (req, res, next) => {
//     res.render("shoppingcart", {
//         products: req.session.cart
//     });
// });
//
//
// app.listen(3000);

const express = require("express");
const session = require('express-session');
const app = express();



app.use(express.urlencoded( { "extended": false}));

var arr = [];

app.get("/", (req, res) => {

    let view = "<ul>";

    for (let key of arr) {

        view += `<li>${key}</li>`

    }

    res.send(`${view} <br> <a href='add'>Add</a>`);

});

app.get("/add", (req, res) => {

    res.send(`<form method='POST'>

<input name='key'>

<input type='submit'>

</form>`);

});



app.post('/add', (req, res) => {

    arr.push(req.body.key);

    res.redirect('/');

})

app.listen(3001);