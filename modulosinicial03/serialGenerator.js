var config = require('./config.js');

module.exports.generate = function (){
  return Math.floor(Math.random() * config.max);
};


//var max = 10000
//module.exports.generate = function (){
 // return Math.floor(Math.random() * global.max);
//};
//console.log(generate());
//exports.generate = function (){ ou this.generate = function (){ também vão funcionar
  //module.exports.generate = function (){
  //return Math.floor(Math.random() * max);
//};
//apenas module exports é retornado da função require, se alterar os outros ficarão desvinculados
//var SerialGenerators = function(){
  // varSerialGeneratos = function() com uma função construtora
  //   this.generate=function()
  // module.exports = new SerialGenerator()

   /* this.generates = function (){
      return Math.floor(Math.random() * max);
    };
    return{
      generates : generates
    };
}
module.exports = SerialGenerators;**/
    //exportando por meio de objetos
    /*module.exports = {
      generates: generates
    };
    desse jeito perdi a referencia para exports e tudo que estiver acima nao preciso colocar dentro
    e this ou só exports n funciona pq o que é retornado é module exports
    **/
