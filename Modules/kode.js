var fs = require('fs');

fs.printMessages = function(str) {
    console.log("message");
    console.log(str);
}

module.exports = fs;

fs.printMessages("Sukses");


// ================


delete fs['add'];

fs.readFile = function(params) {
    console.log(params);
}

module.exports = fs;

fs.readFile('kode');