const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io')
const cors = require('cors');
var counter = 0;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST'],
    }
});

io.on('connection', (socket) => {
    console.log(''+socket.id+' Connected');

// while the socket is on it is listening for send_message broadcast
    socket.on('send_message', (data) => {
        //what happens after the send_message was recived
        socket.broadcast.emit('receive_message', data,counter);
    });
    socket.on('update_count', (data) => {
        counter = counter +1
        socket.emit('count_update', counter);
        console.log(counter)
    })
});

server.listen(3001, () => {
    console.log("Server is Up");
});