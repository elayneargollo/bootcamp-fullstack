var arquivo = require('fs');

var arrayNome = ['Elayne', 'Alison'];
var nome = ',Nino'

exports.ler = function () {
    arquivo.readFile('./nomes.txt', 'utf-8', async function (err,data){ // realiza leitura do arquivo
        if(err){
            console.log(err.message);
        }else {
            console.log('Leitura realizada com sucesso\n' +data);
        }
    });
}

exports.criar = function () {
    arquivo.appendFile('novoarquivo.txt', arrayNome, async function (){ 
        console.log('Arquivo criado')
    });
}

exports.atualizar = function () {
    arquivo.writeFile('./novoarquivo.txt', arrayNome + nome, async function (err){ 
        if (err){
            console.log(err.message);
        } else{
            console.log("Arquivo atualizado");
        }
    });
}

exports.renomear = function () {
    arquivo.rename('./novoarquivo.txt', 'renomeaArquivo.txt', async function (err){ 
        if (err){
            console.log(err.message);
        } else{
            console.log("Arquivo renomeado");
        }
    });
}
exports.deletar = function () {
    arquivo.unlink('./renomeaArquivo.txt',async function (err){ 
        if (err){
            console.log(err.message);
        } else{
            console.log("Arquivo deletado");
        }
    });
}