var konsole = {
    log: function (msg){
        process.stdout.write(msg+ '\n');
    },
    error: function (msg) {
        process.stderr.write(msg+ '\n');
    }
};
//Dupla negação para revelar conteudo booleano caso n seja volta defice
konsole.log('A TTY: ' + !!process.stdout.isTTY);
konsole.error('B TTY: ' + !!process.stderr.isTTY);