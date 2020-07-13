var serialGenerator = require ('./serialGenerator.js');
//var serialGenerator = require ('/Users/arlei.duarte/Documents/estudos-nodejs/nodebranas/serialGenerator.js');

//console.log(serialGenerator.generate());
console.log(serialGenerator.generate());


/*var SerialGenerators = require('./serialGenerators.js');
var serialGenerators =  new SerialGenerators();
console.log(serialGenerators.generates());**/
//exportando por meio de objetos
//console.log(serialGenerator.generates());

//console.log(serialGenerator.generates());

/** como modulo é localizado? O algoritmo de busca sempre tenta buscar o 
 * core module primeiro. Como: net,http, url, fs, zlib, crypto, events, stream, os, vm, util, entre outros.
 * require(X)
 * if x is a core module:  se encontrar module com esse nome
 * return core module : ele retorna
 * stop: e para
 * exemplo require('http') ja importa modulo pq ele ja vem nativamente junto com o node
*/

/** Se eu n estiver importando um core module mas sim um module que eu criei
 * se o nome do mudulo iniciar com /, ../ ou ./ o algoritmo ira localizar o arquivo por meio de um
 * caminho absoluto no sistema de arquivos.
 * 
 * if x begins with './'or '/' or '../'
 * LOAD_AS_FILE(Y+X)
 * LOAD_AS_DIRECTORY(Y+X)
 */

 /** Como meu modulo está na mesma pasta ./ vai buscar na mesma pasta
  * se eu tirar o ./ ele vai buscar dentro de node modules.
  * 
  * além disso nada impede que use o caminho completo
  * C:\Users\arlei.duarte\Documents\estudos-nodejs\nodebranas
  * var serialGenerator = require ('/Users/arlei.duarte/Documents/estudos-nodejs/nodebranas/serialGenerator.js');
 */

 /** caminho relativo
  * var serialGenerator = require ('../serialGenerator.js');
  * terminal com js é opcional o algoritmo irá colocar o .js no final caso não encontrei o modulo.
  * 
  * se não começar com o./ etc ele ira buscar dentro do node_modules
 */
