
# Exercise 1:

You can create a self-signed certificate for testing purposes using OpenSSL. Please note that browsers will show a warning when accessing a site using a self-signed certificate because it's not signed by a trusted Certificate Authority (CA). For production use, always use a certificate issued by a trusted CA.

### Step-by-Step Guide to Create a Self-Signed Certificate:

#### 1. Install OpenSSL
Ensure OpenSSL is installed on your machine. If it is not installed, you can download and install it from the [OpenSSL website](https://www.openssl.org/) or use a package manager:
- **Linux**: `sudo apt-get install openssl` or `sudo yum install openssl`
- **macOS**: `brew install openssl`
- **Windows**: Download from the OpenSSL website and follow the installation instructions.

#### 2. Generate a Private Key
Open your terminal/command line and run the following command:
```sh
openssl genpkey -algorithm RSA -out private-key.pem
```
This creates a private key file named `private-key.pem`.

#### 3. Create a Certificate Signing Request (CSR)
Run the following command:
```sh
openssl req -new -key private-key.pem -out csr.pem
```
You will be prompted to enter details like country, state, organization name, etc. This generates a CSR file named `csr.pem`.

#### 4. Generate a Self-Signed Certificate
Create a certificate using the CSR:
```sh
openssl x509 -req -days 365 -in csr.pem -signkey private-key.pem -out certificate.pem
```
This creates a self-signed certificate valid for 365 days and generates a file named `certificate.pem`.

#### 5. Use the Certificate in Your Node.js Server
Use the generated `private-key.pem` and `certificate.pem` in your Node.js HTTPS server as shown in the previous example:
```javascript
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('path-to/private-key.pem'),
    cert: fs.readFileSync('path-to/certificate.pem')
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Secure World\n');
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Secure Server running at https://localhost:${PORT}/`);
});
```
Replace `'path-to/private-key.pem'` and `'path-to/certificate.pem'` with the paths to your private key and certificate files.

#### Notes:
- Always store your private key securely and never share it.
- Remember that self-signed certificates should not be used in production environments. For production, use certificates from a trusted CA to ensure the security of your users' data.
- Browsers will show a security warning when accessing a site with a self-signed certificate. You can proceed to the site for testing purposes.

---

# Exercise 2:

Basic HTTPS Server with Node.js

**Objective**: Create a simple HTTPS server using Node.js that responds differently to various URL paths and methods.

**Requirements**:
1. **Set Up SSL**: Create a self-signed SSL certificate and private key using OpenSSL (as described in a previous message) or use existing ones if available.
2. **Server Creation**: Use the `https` module to create a server.
3. **Handle Different Paths**: The server should handle requests to different paths (`/`, `/hello`, `/data`) and respond accordingly.
4. **Handle Different Methods**: The server should handle different HTTP methods (GET, POST) and respond accordingly.
   
### Tasks:

#### Task 1: SSL Setup
Create a self-signed SSL certificate and private key using OpenSSL (or use available ones).

#### Task 2: Server Setup
Create an HTTPS server using the `https` module and the SSL files from Task 1. The server should listen on port `3001` and log a message to the console once it's running.

#### Task 3: Request Handling
Modify the server to handle different request paths and methods:
- If the path is `/` and method is `GET`, respond with a "Welcome" message.
- If the path is `/hello` and method is `GET`, respond with a "Hello, Secure World" message.
- If the path is `/data` and method is `POST`, log the posted data to the console and respond with a "Data received" message.
- For all other paths/methods, respond with a 404 status code and a "Not Found" message.

#### Task 4: Testing
Test the server using a browser, `curl`, or any HTTP client (like Postman):
- Visit [https://localhost:3001](https://localhost:3001) and [https://localhost:3001/hello](https://localhost:3001/hello) in a browser and check the responses.
- Use `curl` or Postman to send a POST request to [https://localhost:3001/data](https://localhost:3001/data) with some JSON data and check the console log and response.

### Additional Information:
- Ensure to handle JSON parsing and stringifying properly in the server code.
- You will likely encounter a security warning in the browser when using a self-signed certificate. You can proceed to the site for testing purposes.
- Always use certificates from a trusted CA for production applications.
   
### Example Solution Code Skeleton:
Here’s a basic code skeleton to get you started. It includes SSL setup and server creation, but you'll need to implement the request handling logic as per the tasks above.

```javascript
const https = require('https');
const fs = require('fs');

// SSL Setup
const options = {
    key: fs.readFileSync('path-to/private-key.pem'),
    cert: fs.readFileSync('path-to/certificate.pem')
};

// Server Setup
const server = https.createServer(options, (req, res) => {
    // TODO: Implement request handling logic
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the Secure Server\n');
    } 
    else if (req.url === '/hello' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, Secure World\n');
    } 
    else if (req.url === '/data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Received data:', body);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Data received\n');
        });
    } 
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found\n');
    }
});

// Start Server
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Secure Server running at https://localhost:${PORT}/`);
});
```

### Notes:
- Pay attention to error handling and ensure your code handles possible errors gracefully.
- Test your server thoroughly to ensure it handles various paths and methods as specified in the tasks.