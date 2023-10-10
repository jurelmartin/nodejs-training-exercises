const fs = require('fs');

try {
    const files = fs.readdirSync('myNewDirSync');
    console.log('Files in directory:', files);
} catch (err) {
    console.error('An error occurred:', err);
}
