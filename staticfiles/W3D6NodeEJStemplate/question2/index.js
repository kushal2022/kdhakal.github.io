const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
    res.send(`<form method="post" action="result">
        Name <input name="name">
        Age <input name="age">
        <input type="submit">
    </form>`);
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    if (!name) {
        name = "unknown";
    }
    if (!age) {
        age = "unknown"
    }
    res.render("index", {
        name: name,
        age: age
    });
});
app.listen(3002);