const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'metrics.csv');
function copyFile(srcPath, destPath) {
    const readStream = fs.createReadStream(srcPath);
    const writeStream = fs.createWriteStream(destPath);
    
    readStream.pipe(writeStream);
    
    readStream.on('end', () => {
        console.log('File copy completed!');
    });
}

copyFile(filePath, 'example_destination.csv');
