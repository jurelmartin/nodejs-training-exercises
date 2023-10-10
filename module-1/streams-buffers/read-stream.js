const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'metrics.csv');
const readableStream = fs.createReadStream(filePath);

readableStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});
