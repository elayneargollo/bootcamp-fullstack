const corvermelho = '#corvermelho';
const corazul = '#corazul';
const corverde = '#corverde';

var data = '';
var datvermelho = '';
var datazul = '';
var datverde = '0;'

function trocarCor(vermelho, verde, azul){
    var data = document.querySelector('.quadrado');
    data.style.backgroundColor = 'rgb('+vermelho + ',' + verde + ',' +azul +')';
}

function updateCor(id){

    data = document.querySelector(corvermelho);
    datvermelho = document.querySelector('#textcorvermelho');
    datvermelho.value = data.value;

    data = document.querySelector(corazul);
    datazul = document.querySelector('#textcorAzul');
    datazul.value = data.value;

    data = document.querySelector(corverde);
    datverde = document.querySelector('#textcorVerde');
    datverde.value = data.value;
     
    trocarCor(datvermelho.value,datazul.value,datverde.value);
}

