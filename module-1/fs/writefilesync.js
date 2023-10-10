const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const data = 'Hello, this is a sample text written synchronously!';

try {
    fs.writeFileSync(filePath, data, 'utf8');
    console.log('File written successfully (sync)!');
} catch (err) {
    console.error('An error occurred:', err.message);
}

console.log('Writing to file synchronously...');
