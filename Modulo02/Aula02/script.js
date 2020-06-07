var fs = require('fs');

fs.readFile('./test-file.txt', 'utf-8', function (err,data){ // realiza leitura do arquivo
    if(err){
        console.log(err.message);
    }else {
        console.log(data);
    }
});