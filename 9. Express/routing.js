var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send("hello from server");
})

app.post('/',function(req,res){
    console.log("post from server")
    res.send("Halo post");
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Basic Routing listening pada port:', host, port);
})