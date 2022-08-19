const fs = require('fs');

const watcher = fs.watch('kode.txt'); // bisa juga mantau perubahan dalam 1 folder

watcher.on('change',function(event,filename){
    console.log(`${event} pada file ${filename}`)
});