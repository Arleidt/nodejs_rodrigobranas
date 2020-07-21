var http = require('http');

//write vai me permitir escrever no corpo da resposta
// resposta
http.createServer(function(req, res){
    res.write( 
      '<html>' + 
          '<head>' +
                '<title>Hello Word</title>' +
          '</head>' +
              '<body>' +
                    '<h1>Hello Word</h1>' +
              '</body>' +
      '</html>'
    );
    res.end();
}).listen(3412);