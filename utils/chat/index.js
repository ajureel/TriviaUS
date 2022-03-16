//TO INIT CHAT, OPEN TERMINAL AND 'NODE UTILS/CHAT/INDEX.JS' THEN GO TO BROWSER 'LOCALHOST:3002'


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


//GET CHAT HTML FILE
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// THIS WILL 'EMIT' THE EVENT => SOCKETS
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(3002, () => {
    console.log('Server is now live! *:3002');
});

