const fs = require('fs');

try {
    fs.rmdirSync('myNewDirSync', { recursive: true });
    console.log('Directory deleted successfully!');
} catch (err) {
    console.error('An error occurred:', err);
}
