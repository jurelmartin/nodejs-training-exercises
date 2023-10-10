const fs = require('fs');
const writableStream = fs.createWriteStream('streams.txt');

writableStream.write('Hello,');
writableStream.write(' World!');
