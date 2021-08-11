const express = require('express')
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.send("<form method='post' action='result'>" +
        "<label>Name <input type='text' name='name'></label>" +
    "<button type='submit'>Submit Query</button>");
});

app.post('/', (req, res) => {
    res.redirect(303,'/result', {
        name: req.body.name,
    });
})

app.use('/result', (req, res) => {
    res.send('Welcome! ' + name);
});

app.listen(3003);
