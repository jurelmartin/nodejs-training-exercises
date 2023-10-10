const fs = require('fs');

const readFileCallback = (error, data) => {
    if (error) {
        console.error('Error reading the file:', error.message);
        return;
    }
    console.log('File data:', data.toString());
};

fs.readFile('/path/to/file.txt', 'utf8', readFileCallback);
