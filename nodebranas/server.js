var net = require('net');

net.createServer(function (connection){
    connection.write('Hello, I am the server!')
}).listen(3000);