const https = require('https');

https.get('https://httpbin.org/get', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(data);
    });
}).on('error', (err) => {
    console.log("Error: ", err.message);
});
