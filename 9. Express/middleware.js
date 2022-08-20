var express = require('express');
var app = express();

app.use('/kode', function(req,res,next){
    console.log("reqeust diterima" + Date.now());
    next();
});


app.get('/kode',function(req,res){
    res.send("halooooo");
});

app.listen(1234);