const fs = require('fs');

var data = "Menulis data123z";

// fs.writeFile('kode.txt', data, (err) => {
//     if(err) return console.error(err);
// })

// try{
//     fs.writeFileSync('kode.txt', data, {mode : 0o755});
// }catch(err){
//     console.error(err);
// }

var buffer = new Buffer([0x48, 0x65, 0x6c, 0x6f]);

fs.writeFile('kode.txt',buffer, function(err){
    if(err) return console.error(err);
});