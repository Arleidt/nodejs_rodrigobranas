var net = require('net');

net.createServer(function (connection){
    connection.write('Hello, I am the server!');
    connection.on('data', function(message){
        console.log(message.toString());//servidor bi direcional
    });
}).listen(3000);