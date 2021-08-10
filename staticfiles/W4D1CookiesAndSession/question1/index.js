const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const path = require('path');

app.use(express.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(cookieParser('my secret here'));

app.get("/", (req, res) => {
    res.render('index', {
        cookies: req.cookies,
    })
});

app.get("/add", (req, res) => {
    res.render('add');
});


app.post('/add', function(req, res){
    res.cookie(req.body.key, req.body.value);
    res.redirect(303,'/');
});

app.listen(3000, (err)=>{
    if(err)
        throw err;
    console.log('listening on port 3000');
});