//stdin para ler teclado
exports.onReadable = function(callback){
  
//detecta mudança alguma coisa pra ler vai ler se tiver algo la diferente de null vai invocar meu callback convertendo chunk para string
        process.stdin.on('readable', function(){
            var chunk = process.stdin.read();
            if(chunk) callback(chunk.toString());
            //if (chunk)  console.log(chunk.toString());
            //if (chunk != null)  console.log(chunk.toString());
            //buffer é muito cru vantagem que posso converter com base 64 com sistema de codificação diferente
    });
}