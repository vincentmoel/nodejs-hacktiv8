const buff = Buffer.allocUnsafe(100);

const len = buff.write("halo dari kode", 2, 5, 'utf8');

console.log("Octets Written:" + len);

// ================

const buff2 = Buffer.allocUnsafe(26);
for(var i = 0; i<26; i++)
{
    buff2[i] = i +97
}

console.log(buff2.toString('ascii'));
console.log(buff2.toString('ascii',0,5));

const buf = new Buffer("ab");

const json = buf.toJSON(buf);

console.log(json);