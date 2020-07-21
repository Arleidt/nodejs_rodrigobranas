//var http = require('http'); 

//passando por router.js
var router = require('./router');

//abrindo na 3412 para ele passar em router.js na linha 6 a 8
var app = router(3412);

// chave valor
var operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
    {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
    {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}
];

var contatos = [
  {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: operadoras[0]},
  {id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: operadoras[1]},
  {id: 3, nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: operadoras[2]}
];

//registros de serviços
//chaveamento direto registros de rotas no router.js
// get passa um path operadoras e função
app.get('/operadoras', function(req, res){
  res.write(JSON.stringify(operadoras));
  res.end();
});

app.get('/contatos', function(req, res){
  res.write(JSON.stringify(contatos));
  res.end();
});

app.post('/contatos', function(req, res){
  res.end();
});

/** passado no router
http.createServer(function(req, res){
    res.setHeader('Acess-Control-Allow-Origin', '*');
    if (req.url === "/operadoras") res.write(JSON.stringify(operadoras));
    if (req.url === "/contatos") res.write(JSON.stringify(contatos));
    //console.log(req.url);
    para um json apenas.
    //res.write(JSON.stringify(operadoras));
    res.end();
}).listen(3412);*/

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