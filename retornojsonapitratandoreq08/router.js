//roteador de requisições
var http = require('http');

//criação função createRouter que recebe a porta onde vou abrir o meu roteador
var createRouter = function (port) {

  // passando funções por api dinamicamente
  var api = {};
  var routes = {};
  var methods = ['GET', 'POST'];

  //criar dinamicamente cada um dos metodos nas rotas registrando get e post
  methods.forEach(function  (method)  {
        routes[method] = {};
        //função para ser invocada no http
        api[method.toLowerCase()] = function (path, fn){
              routes[method] [path] = fn;
        };
  });

  var post = function (path, fn) {
    //registrando pat no get {} e dizendo que a funcao dele é fn
      routes['POST'][path] = fn;
  };  

    http.createServer(function (req, res){
            res.setHeader('Acess-Control-Allow-Origin', '*');
            if (!routes [req.method] [req.url]) return res.end();
            //chaveamento direto do get e post de retorno no var get localizanado a função registrada la
            //mapeia as funções registradas no http get e post
            routes[req.method] [req.url] (req, res);
    }).listen(port);

//expondo requisição
  return api;    
};
//modulo. exports e passando uma função assim consigo ir em http chamar router e instancia-lo
module.exports = createRouter;