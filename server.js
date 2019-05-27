const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({
    port: 8080
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
        ws.send('from server --' + message);
    })
})