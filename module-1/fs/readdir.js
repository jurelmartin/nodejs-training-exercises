const fs = require('fs');

fs.readdir('myNewDir', (err, files) => {
    if (err) {
        return console.error('An error occurred:', err);
    }
    console.log('Files in directory:', files);
});
