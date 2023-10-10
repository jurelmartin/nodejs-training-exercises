const fs = require('fs');

fs.rmdir('myNewDir', { recursive: true }, (err) => {
    if (err) {
        return console.error('An error occurred:', err);
    }
    console.log('Directory deleted successfully!');
});
