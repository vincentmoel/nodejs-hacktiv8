const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type" : "text/html"});

    res.write("Kode Server Sudah Berjalan");

    res.end();
}).listen(9000)