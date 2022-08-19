// var fs = require("fs");
// var data = "";

// var readerStream = fs.createReadStream('kode.txt');

// readerStream.setEncoding("UTF8");

// readerStream.on('data',function(chunk){
//     data += chunk

// })

// readerStream.on('end', function(){
//     console.log(data);
// })

// readerStream.on('error',function(){
//     console.log(err.stack);
// })

// console.log("Program Ended");

// ====================

// var data = "ini data baru dengan writestream";

// var writerStream = fs.createWriteStream('kode.txt');

// writerStream.write(data,'UTF8');

// writerStream.end();

// writerStream.on('finish', function(){
//     console.log('write completed');
// })

// writerStream.on('error', function(){
//     console.log(err.stack);
// })

// console.log("ended write");

// ====================

// var fs = require("fs");

// var readerStream = fs.createReadStream('kode.txt');

// var writerStream = fs.createWriteStream('output.txt');

// readerStream.pipe(writerStream);

// console.log("program endedzz");


// ====================


// var fs = require("fs");
// var zlib = require('zlib');

// fs.createReadStream('kode.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('kode.txt.gz'))


//     console.log('file compressed');

// ====================


var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('kode.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('kode2.txt'))


    console.log('file uncompressed');