const fs = require('fs');
const zlib = require('zlib'); // Module providing compression functionality

const readStream = fs.createReadStream('path_to_text_file.txt');
const writeStream = fs.createWriteStream('path_to_output.gz');
const gzip = zlib.createGzip(); // Transform stream for compressing data

// Pipe readable stream -> transform stream -> writable stream
readStream.pipe(gzip).pipe(writeStream);

readStream.on('end', () => {
    console.log('File compression completed!');
});
