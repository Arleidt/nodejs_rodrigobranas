var net = require('net');

var client = net.connect(3000);
client.on('connect', function(){
    client.write('Hello, I am the client!'); //servidor bi direcional
});
client.on('data', function(message){
    console.log(message.toString());
});


/**var net = require('net');

var client = net.connect(3000);
client.on('data', function(message){
    console.log(message.toString());
});*/

/**net.createConnection({host: '127.0.0.1', port: 3000});
Eventos: um dos + importantes é o evento data, responsável por detectar o recebimento de novas msgs
da disponibilidade de dados nessa conexão então a gnt vai receber
nesse caso só exibindo no console*/