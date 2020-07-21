console.log('A  ' + new Date());
setImmediate(function(){
    console.log('I  ' + new Date());
}); // não passo tempo a ideia é deixar pra depois mesma coisa que timeoutZero
console.log('B  ' + new Date());