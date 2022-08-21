const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = "9cdb25a61f5f6f1688bd6c3fbe242fa5";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/', function(req,res){
    res.render('index',{weather:null, error:null});
});

app.post('/',function(req,res){
    let city = req.body.city;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    request(url,function(err,response,body){
        if(err)
        {
            res.render('index',{weather : null, error: "Error, Please Try Again!"});
        }else{
            let weather = JSON.parse(body);
            if(weather.main == undefined)
            {
                res.render('index',{weather : null, error: "Error, Please Try Again!"});
            }else{
                let weatherText = `It's ${weather.main.temp} degrees. In ${weather.name}`;
                res.render('index',{weather: weatherText, error:null});
            }
        }
    })
});

app.listen(3000);