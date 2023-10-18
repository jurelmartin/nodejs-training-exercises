const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
};
console.log(options);
const server = https.createServer(options, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Secure World\n');
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Secure Server running at https://localhost:${PORT}/`);
});
