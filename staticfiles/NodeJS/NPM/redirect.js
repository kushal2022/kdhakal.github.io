const express = require("express");
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
