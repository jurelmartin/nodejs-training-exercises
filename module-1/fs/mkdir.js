const fs = require('fs');

fs.mkdir('myNewDir', { recursive: true }, (err) => {
    if (err) {
        return console.error('An error occurred:', err);
    }
    console.log('Directory created successfully!');
});
