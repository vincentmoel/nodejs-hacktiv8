let express = require("express");
let app = express();

let jwt = require('jsonwebtoken');

let data = {
    user: "Vincent",
    password: "vincent1210"
}

app.get("/", (req,res) => {
    res.send("Welcome");
} );

function verification(req,res,next) {
    let getHeader = req.headers["auth"];
    console.log(getHeader);
    if(typeof getHeader !== "undefined") {
        req.token = getHeader;
        next();
    }else{
        res.sendStatus(403);
    }
}

jwt.sign(
    {
        data:data
    },
    "secret",
    (err,token) => {
        console.log(token)
    }
);

app.get('/data',verification, (req,res) => {
    jwt.verify(req.token, "secret", (err, data) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.json(data)
        }
    })
})

app.listen(3000, () => {
    console.log(`Running on POST 3000`);
})