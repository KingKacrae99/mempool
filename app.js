const net = require('node:net');
const getTransaction = require('./generator.js');

// create a TCP SERVER
const server = net.createServer((socket)=>{

    // log a message when a client connects
    console.log('Client connected successfully');

    // transaction generation tracker
    let counter = 0;

    // stores transactions generated
    let transactions = [];

    // generates and store transaction every 5 second
    setInterval(() => {

        if (counter > 5){
            counter = 0;
        }
        
        let transaction = getTransaction.generateTransaction(counter++);
        transactions.push(transaction);
            
        // checks if a client is writeable
        if (socket.writable){
            // send or write data to the client
            socket.write(JSON.stringify(transactions));
        }else{
            console.error('Failed to write to socket');
        }

    }, 5000);

    // listen to close connection from the client 
    socket.on('close', (hadError)=>{
        if(hadError) {
            console.error('Client disconnected with error');
        } else {
            console.log('Client disconnected successfully');
        }
    });

    //listen for network or connection error.
    socket.on('error', (err)=>{
        switch (err.code) {
            case 'ECONNRESET':
                console.log('Client connection reset')              
                break;
            case 'EADDRINUSE':
                console.error('Address already in use')
                break;
            default:
                console.error(`Error: ${err.code}, message: ${err.message}`)
                break;
        }
    })

});

// listen for incoming connections on port 9000
server.listen(9000, ()=>{
    console.log('Server is listening on port 9000');
});