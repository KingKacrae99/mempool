const net = require('node:net')

// create a TCP client that connects to the server on port 9000
const client = net.createConnection({ port: 9000 }, () => {
    console.log('Connected to server');
});

// listen for data from the TCP server
client.on('data',(data)=>{
    console.log(`Received data: ${data.toString('utf8')}`);
});

// listen for the end of the connection
client.on('end',()=>{
    console.log('Disconnected from server');
});