var express=require('express');
var app=express();
var ejs=require('ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('web'));
app.listen(8080);
app.get('/',function(req,res){
   res.render('login');
    });
app.post('/fupload',function(req,res){
    res.render('fupload');
})