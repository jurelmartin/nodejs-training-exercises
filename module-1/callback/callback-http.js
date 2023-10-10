const http = require('http');

const handleResponse = (error, data) => {
    if (error) {
        console.error('Error during HTTP request:', error.message);
        return;
    }
    console.log('HTTP Response Data:', data);
};

const makeRequest = (url, callback) => {
    http.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            callback(null, data);
        });

    }).on('error', (err) => {
        callback(err, null);
    });
};

makeRequest('http://api.example.com/data', handleResponse);
