var http = require('http'); 

// chave valor
var operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
    {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
    {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}
];

http.createServer(function(req, res){
    res.setHeader('Acess-Control-Allow-Origin', '*');
    res.write(JSON.stringify(operadoras));
    res.end();
}).listen(3412);

/**res.setHeader('Acess-Control-Allow-Origin', '*');
 * same origin policy a politica de mesma origem, se estou na porta 8000 eu não posso
 * pedir diretamente um recurso na porta 3412, assim eu também não posso mudar o protocolo
 * nem o host não posso mudar a porta, posso variar do /#/contatos
 * localhost:8000/#contatos
 * Então tenho que dizer explicitamente Acess Control Allow Origin e incluir localhost 8000
 * ou colocar asterisco por exemplo.
 * 
 * Uma origem é definida pelo esquema (também conhecido como protocolo, por exemplo, HTTP ou 
 * HTTPS), porta (se especificada) e host. Quando todos os três são iguais para dois URLs, 
 * eles são considerados de mesma origem. Por exemplo, http://www.example.com/fooé a mesma 
 * origem, http://www.example.com/bar mas não https://www.example.com/bar porque o esquema
 * é diferente.
*/