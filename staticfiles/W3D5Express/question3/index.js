const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    res.send('Welcome! ' + name + ' and your age is ' + age);
});

app.listen(3004);