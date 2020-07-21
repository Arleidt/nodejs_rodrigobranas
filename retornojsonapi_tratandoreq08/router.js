//roteador de requisições
var http = require('http');

//criação função createRouter que recebe a porta onde vou abrir o meu roteador
var createRouter = function (port) {

  // passando funções por api dinamicamente
  var api = {};
  var routes = {};
  var methods = ['GET', 'POST', 'OPTIONS'];
  var interceptors = [];

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

  api.interceptor = function(interceptor){
      interceptors.push(interceptor);
  };

  //enquanto houver interceptors eu os executo
  var executeInterceptors = function (number, req, res){
      var interceptor = interceptors[number];
      if (!interceptor) return;
      interceptor(req, res, function(){
          executeInterceptors(++number, req, res);
      });
  };

  //extrai array de buffer, next para ser antes do tratamento
  var handleBody = function(req, res, next){
    var body = [];
    req.on('data', function(chunk){
      console.log(chunk);
      body.push(chunk);
    });
    //set dentro da requisição
    req.on('end', function(){
      req.body = Buffer.concat(body).toString();
      next();
    });
  };

  // antes processar chamo interceptors. trat req e body
  http.createServer(function (req, res){
          handleBody(req, res, function(){
            console.log(req.method);
            executeInterceptors(0, req, res);
            if (!routes [req.method] [req.url]) {
              res.statusCode = 404;  
              return res.end();
            }
            
            //chaveamento direto do get e post de retorno no var get localizanado a função registrada la
            //mapeia as funções registradas no http get e post
            routes[req.method] [req.url] (req, res);
          });
  }).listen(port);

  //expondo requisição
  return api;    
};
//modulo. exports e passando uma função assim consigo ir em http chamar router e instancia-lo
module.exports = createRouter;