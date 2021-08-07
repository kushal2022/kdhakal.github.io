const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if(!name) {
        name = 'kushal';
    }
    if(!age) {
        age = 23;
    }
    res.send('Welcome! ' + name + ' and your age is ' + age);
});

app.listen(3002);