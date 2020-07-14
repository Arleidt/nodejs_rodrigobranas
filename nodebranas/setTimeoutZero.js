//Mostra A, registra I e mostra B e deixa pra proxima I, artificio pra deixar essa execução pra depois
// Usar em algum momento pra aliviar event looping deixando esse trabalho pra depois.
//Ou encadear eventos de uma maneira específica
console.log('A  '+ new Date());
setTimeout(function(){
  console.log('I  ' + new Date());
}, 0);
console.log('B  '+ new Date());