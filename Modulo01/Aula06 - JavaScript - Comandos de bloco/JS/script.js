/* Estrutura de decisão  - if/else */

var a = 5;
var b = 6;

if (a>b){ /* O que tem mais probabilidade de acontecer você testa logo no inicio. */
    console.log('Usando if/else ... ' +a + ' é maior que ' + b);
}
else {
    if (a<b){
        console.log('Usando if/else ... ' +a + ' é menor que ' + b);
    }
    else {
        console.log('Usando if/else ... ' +a + ' é igual a ' + b);
    }
}

/* Operador Ternário */

a = 6;
b = 7;
var resposta = (a>b) ? 'maior' : (a<b) ? 'menor': 'igual';

console.log('Usando operador ternário ... ' +resposta);

var dia = 3;
var diaSemana = 
    dia === 1  
    ? 'domingo' 
    : dia===2 
    ? 'segunda' 
    : dia===3 
    ? 'terca' 
    : dia===4
    ? 'quarta' 
    : dia===5
    ? 'quinta' 
    : dia===6
    ? 'sexta' 
    : dia===7
    ? 'sábado'
    : 'invalido';

console.log('Usando operador ternério ... ' + 'O dia da semana é: ' +diaSemana);

/* Estrutura de decisão  - switch */

dia = 2;
var r = ' ';

switch (dia){
    case 1: 
        r= 'Domingo;'
        break;
    case 2:
        r = ('Segunda-feira');
        break;
    case 3:
        r = ('Terça-feira');
        break;
    case 4:
        r = ('Quarta-feira');
        break;
    case 5:
        r = ('Quinta-feira');
        break;
    case 6:
        r = ('Sexta-feira');
        break;
    case 7:
        r = ('Sábado');
        break;
    default:
        r = ('Invalido');
}

console.log('Usando switch ... ' + 'Dia da semana é: ' +r);

/* Estrutura de repetição - while */

var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10){
    somatorio += numeroAtual;
    numeroAtual++;
}

console.log('Usando while ... ' + 'A soma é ' +somatorio);


/* Estrutura de repetição - do ... while */

var numeroAtual = 1;
var somatorio = 0;

do {
    somatorio += numeroAtual;
    numeroAtual++;
}
while (numeroAtual <= 10);
console.log('Usando do ... while ... ' + 'A soma é ' +somatorio);

/* Estrutura de repetição - for */

var somatorio = 0;

for (numeroAtual = 1; numeroAtual<=10; numeroAtual++){
    somatorio += numeroAtual;
}

console.log('Usando for ... ' + 'A soma é ' +somatorio);


