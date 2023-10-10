const fs = require('fs');

// Data to append to the file
const data = 'This data will be appended at the end of the file.\n';

// Append data to file using 'a' flag
fs.writeFile('example.txt', data, { flag: 'a' }, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        return;
    }
    console.log('Data was appended to file!');
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