const express = require('express');
const path = require('path');
const url = require('url');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing',
}));

const PRODUCTS = [
    { id: 1, name: 'Product 1', description: 'Description', price: 3000 },
    { id: 2, name: 'Product 2', description: 'Description', price: 5000 },
    { id: 3, name: 'Product 3', description: 'Description', price: 7000 }];


app.use(function (req, res, next) {
    if (!req.session.cart) {
        req.session.cart = {};
    }
    next();
});

app.get('/product/1', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(e => e.id === 1)
    });
});

app.get('/product/2', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(e => e.id === 2)
    });
});

app.get('/product/3', (req, res) => {
    res.render("product", {
        ...PRODUCTS.find(e => e.id === 3)
    });
});

app.post('/addToCart', (req, res, next) => {
    let item = req.body;

    let exist = req.session.cart[item.name];
    if (exist) {
        exist.quantity += 1;
    } else {
        item.quantity = 1;
        req.session.cart[item.name] = item;
    }

    res.redirect(url.format({
        pathname: "/cart"
    }));
});

app.get('/cart', (req, res, next) => {
    res.render("shoppingcart", {
        products: req.session.cart
    });
});


app.listen(3000);

/*
* I learned about express framework with ejs template which helps us with a lot of
* functionality to more easily make web applications. It helps in the following field
* like parsing requests and sending responses, routing, managing data.
*
*here i used cookies and session to stored data.
*
* here is my github link:
* https://github.com/kushal2022/kdhakal.io/tree/main/staticfiles/W4D1CookiesAndSession/
*/

const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "view"));
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: "!901XOco", resave: true }));

app.use((req, res, next) => {
    if (!req.session.list) {
        req.session.list = [];
    }
    next();
});

app.get("/", (req, res) => {
    res.render("homepage", { list: req.session.list });
});

app.get("/add", (req, res) => {
    res.render("form");
});

app.post("/add", (req, res) => {
    req.session.list.push(req.body.item);
    res.redirect(303, "/");
});

app.listen(3000);

/*
* I learned about express framework with ejs template which helps us with a lot of
* functionality to more easily make web applications. It helps in the following field
* like parsing requests and sending responses, routing, managing data.
*
*here i used json file system and session to store dta
*
* here is my github link:
* https://github.com/kushal2022/kdhakal.io/tree/main/staticfiles/W4D2AjaxAndJson/
*/