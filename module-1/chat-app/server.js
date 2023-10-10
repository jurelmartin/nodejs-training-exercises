const express = require('express');
const http = require('http');
const { Server } = require('websocket');
const WebSocketServer = require('websocket').server;

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("WebSocket Chat App");
});

app.use(express.static(__dirname));

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

wsServer.on('request', (request) => {
    const connection = request.accept(null, request.origin);
    console.log('WebSocket connection established');

    connection.on('message', (message) => {
        console.log('Received Message:', message.utf8Data);
        connection.sendUTF(`Echo: ${message.utf8Data}`);
    });

    connection.on('close', (reasonCode, description) => {
        console.log('WebSocket connection closed:', description);
    });
});

