const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const data = 'Hello, this is a sample text written asynchronously!';

fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) {
        return console.error('An error occurred:', err.message);
    }
    console.log('File written successfully (async)!');
});

console.log('Writing to file asynchronously...');
