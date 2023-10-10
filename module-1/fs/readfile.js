const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return console.error('An error occurred:', err.message);
    }
    console.log('File content (async):', data);
});

console.log('Reading file asynchronously...');
