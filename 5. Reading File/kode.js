const fs = require('fs');

fs.readFile('./kode.txt', {encoding : 'utf8'},(err, content) => {
    if(err) return console.error(err);

    console.log(content);
})

// const data = fs.readFileSync('')