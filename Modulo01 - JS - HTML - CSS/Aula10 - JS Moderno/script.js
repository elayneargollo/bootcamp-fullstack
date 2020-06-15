'use strict';

// var x let
// var tem escopo abrangente
// let tem escopo reduzido

function withVar(){
    for(var i=0; i<10; i++){
        console.log('var' +i);
    }

    i=20;
    console.log(i);
}

function withLet(){
    for(let i=0; i<10; i++){
        console.log('let' +i);
    }

    i=20;
    console.log(i);
}

//withLet();
withVar();

// const - não podemos reatribuir valores

/*
const c =10;
c=20;*/

// sintaxe função

function sum(a,b){
    return a+b;
}

// funcao anonima
const sum2 = function(a,b){
    return a+b;
}

//arrow function
const sum3 = (a,b) => {
    return a +b;
}

//arrow function reduzida
const sum4 = (a,b) => a+b;

console.log(sum(1,4));
console.log(sum2(1,4));
console.log(sum3(1,4));
console.log(sum4(1,4));

// template literals

const surName = 'Natalia';
const name = 'Elayne';

const text1 = 'Meu nome é ' + name + ' ' + surName;
const text2 = `Meu nome é ${name} ${surName}`;

console.log(text1);
console.log(text2);

// default parametro

const sum5 = (a,b = 10) => a+b;

console.log(sum5(2));
console.log(sum5(2,8));


