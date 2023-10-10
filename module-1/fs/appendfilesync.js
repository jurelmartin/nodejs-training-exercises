const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// Data to append to the file
const data = 'This data will be appended at the end of the file.\n';

// Append data to file asynchronously
try {
    fs.appendFileSync(filePath, data, 'utf8')
    console.log('Data was appended to file!');
} catch (err) {
    console.error('An error occurred:', err);
}
