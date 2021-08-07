const express = require('express')
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.send("<form method='post' action='result'>" +
        "<label>Name <input type='text' name='name'></label>" +
    "<label>Age <input type='text' name='age'></label>" +
    "<button type='submit'>Submit Query</button>");
});

app.use('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    res.send('Welcome! ' + name + ' and your age is ' + age);
});

app.listen(3003);