const fs = require('fs');
const csv = require('csv-parser'); 

const path = require('path');

const filePath = path.join(__dirname, 'metrics.csv');
const readStream = fs.createReadStream(filePath);
const writeStream = fs.createWriteStream('output_transformed.csv');

// Define a function to transform row data
function transformRowData(row) {
    // Your transformation logic here
    // Example: convert all string values to uppercase
    const transformedRow = {};
    for (const key in row) {
        transformedRow[key] = row[key].toUpperCase();
    }
    return transformedRow;
}

// Define a function to convert an object to a CSV string
function objectToCsvString(obj) {
    return Object.values(obj).map(value => `"${value.toString().replace(/"/g, '""')}"`).join(',') + '\n';
}

// Define a transform stream to modify CSV data
const transformStream = csv()
    .on('data', (row) => {
        // Process and transform the row data
        const transformedRow = transformRowData(row);
        // Convert object to CSV string and write to output stream
        writeStream.write(objectToCsvString(transformedRow));
    })
    .on('end', () => {
        console.log('CSV data processing completed!');
        // Ensure that data is flushed to the file before exiting
        writeStream.end();
    });

readStream.pipe(transformStream);
