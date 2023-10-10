const fs = require('fs');

try {
    fs.mkdirSync('myNewDirSync', { recursive: true });
    console.log('Directory created successfully!');
} catch (err) {
    console.error('An error occurred:', err);
}
