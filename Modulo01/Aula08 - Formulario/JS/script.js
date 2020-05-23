window.addEventListener('load', start);

function start(){
    console.log("totalmente carregada");

    var input = document.querySelector('#nome');
    input.addEventListener('keyup', countName);

    var form = document.querySelector('form');
    form.addEventListener('submit',preventSubmit);
}

function countName(event){
    var count = event.target.value;
    
    var span = document.querySelector('#nameLength');
    span.textContent = count.length;
}

function preventSubmit(event){
    event.preventDefault();
    var input = document.querySelector('#nome');
    alert(input.value + ' cadastrado com sucesso');
}

