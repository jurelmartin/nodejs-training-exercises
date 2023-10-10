const fs = require('fs');

// Data to write to the file
const data = 'This data will be written to the file.\n';

// Write data to file using 'wx' flag
fs.writeFile('example2.txt', data, { flag: 'wx' }, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        return;
    }
    console.log('Data was written to file!');
});

/*
Additional Flags for Reference:

    'r': Open the file for reading.
    'w': Open the file for writing. The file is either created (if it does not exist) or truncated (if it exists).
    'a+': Open the file for reading and appending.
    'w+': Open the file for reading and writing. The file is either created (if it does not exist) or truncated (if it exists).
    'ax': Like 'a' but fails if the file already exists.
    'wx+': Like 'w+' but fails if the file exists.
    */