const express = require('express');

const bodyParser = require('body-parser');
const app = express();

// it works as middleware
const checkUrl = function (req, res, next) {
    console.warn("current route is ", req.originalUrl);
    next();
}

app.use(checkUrl);
app.get('/', function (req, res) {
   res.send("This is Home Page");
});
app.get('/login', function (req, res) {
    res.send("This is Login Page");
});
app.get('/about', function (req, res) {
    res.send("This is About Page");
});

app.listen(3000);