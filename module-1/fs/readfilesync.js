const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File content (sync):', data);
} catch (err) {
    console.error('An error occurred:', err.message);
}

console.log('Reading file synchronously...');
