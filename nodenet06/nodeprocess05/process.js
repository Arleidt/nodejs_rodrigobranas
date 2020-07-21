//interando linha de comando argv vai ser um array obter parametros de tudo que foi passado na linha de comando 
//Um processo de instancia de um determinado programa em execução no SO
//process.argv.forEach(function(value){
  //  console.log(value);
//})
//do terceiro parametro pra frente mas posso passar 0 1 etc os outro 2 n interessa pq 1 é node e o outro nome do arquivo 
var help = require('./help');
var options = process.argv.slice(2);
if (options.length < 1) {
    help.showOptions();
    return;
  //abort process
}
//console.log(options[0] );
switch(options[0])  {
    case 'a':
      console.log('pid:'  + process.pid);
      break;
    case 'b':
      console.log('title:'  + process.title);
      break;
    case 'c':
      console.log('arch:'  + process.arch);
      break;
    case 'd':
      console.log('platform:'  + process.platform);
      break;
    default: 
          help.showOptions();
}