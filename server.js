const net = require('node:net');

const server = net.createServer((socket)=>{

    // log a message when a client connects
    console.log('Client connected successfully');

    // send a message to the client
    socket.write('hello world\n');

    // close the socket connection
    socket.end('goodbye friends');
});

// listen for incoming connections on port 9000
server.listen(9000, ()=>{
    console.log('Server is listening on port 9000');
});