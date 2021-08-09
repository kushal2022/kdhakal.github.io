const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


var arr = [];

app.get("/", (req, res) => {

    res.render("main", {
        arr: arr,
    });

});

app.get("/add", (req, res) => {

    res.render("add");

});

app.post('/add', (req, res) => {

    arr.push(req.body.key);

    res.redirect(303,'/');

})

app.listen(3001);