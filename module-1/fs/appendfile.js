const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// Data to append to the file
const data = 'This data will be appended at the end of the file.\n';

// Append data to file asynchronously
fs.appendFile(filePath, data, 'utf8', (err) => {
    if (err) {
        console.error('An error occurred:', err);
        return;
    }
    console.log('Data was appended to file!');
});
