var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var Parser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


app.get('/', function(req,res){
    res.render('blocks/registration');
});
app.get('/enter', function(req,res){
    res.render('blocks/enter');
});
app.get('/profile', function(req,res){
    res.sendFile(__dirname + '/html/profile.html');
});

app.post('/profile', urlencodedParser, function(req,res){
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.sendFile(__dirname + '/html/profile.html');
});

app.listen(3000);
