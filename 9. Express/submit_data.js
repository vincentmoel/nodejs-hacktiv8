var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/submit_data.html',function(req,res){
    res.sendFile(__dirname + "/" + "submit_data.html")
});


app.post('/user', function(req,res){
    console.log(req);
    response = {
        first_name : req.body.first_name
    };

    console.log(response);

    res.end(JSON.stringify(response));
});

var server = app.listen(1234, function(){
    var host = server.address().address;
    var port = server.address().port;
})