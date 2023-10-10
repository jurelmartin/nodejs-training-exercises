const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'metrics.csv');
const readableStream = fs.createReadStream(filePath);
const writableStream = fs.createWriteStream('example.txt');

// Piping read stream to write stream
readableStream.pipe(writableStream);
