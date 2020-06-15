window.addEventListener("load", start);

var inputNome = null;
var inputBuscar = null;
var count = null;
var soma = 0;
var sexoFemino = 0;
var sexoMasculino = 0;
var qntF = 0;
var qntM = 0;

function start() {
  inputNome = document.querySelector("#inputNome");
  inputBuscar = document.querySelector("#inputBuscar");

  divEncontrado = document.querySelector(".encontrado");
  divEncontrado.innerHTML = `<h1>Nenhum usuário filtrado</h1> `;

  divEstatistica = document.querySelector(".estatistica");
  divEstatistica.innerHTML = `<h1>Nada a ser exibido</h1> `;

  inputNome.addEventListener("keyup", countName);
  inputBuscar.addEventListener("click", filtrar);

}

function reloadThePage() {
  setTimeout("location.reload(true);",5000);   
} 

function filtrar() {

  reloadThePage();

  clearInputButton();
  divEncontrado.innerHTML = "";

  var ul = document.createElement("ul");

  var i = 0;
  var total = 0;

  const dados = results.find((dados) => {

    var nome = dados.name.first;
    var sobrenome = dados.name.last;

    sobrenome.toLowerCase();
    nome.toLowerCase();

    while (nome.indexOf(inputNome.value) > 0 
            || nome.toUpperCase().indexOf(inputNome.value) > 0 
            || dados.name.first.toLowerCase() === inputNome.value 
            || dados.name.first === inputNome.value
            || sobrenome.indexOf(inputNome.value) > 0 
            || sobrenome.toUpperCase().indexOf(inputNome.value) > 0 
            || dados.name.last.toLowerCase() === inputNome.value 
            || dados.name.last === inputNome.value
            ) {
     
      total++;
      i++;

      if (i > 0) {

        var li = document.createElement("li");
        var span = document.createElement("span");

        span.innerHTML = ` 
              <img class='avatar' src='${dados.picture.thumbnail}' alt='${dados.picture.thumbnail}'/>
              <p>${dados.name.first} ${dados.name.last}, ${dados.dob.age} anos  </p> `;

        li.appendChild(span);
        ul.appendChild(li);

        console.log('nome: ' +nome);
        estatistica(dados.dob.age,i,dados.gender);

        break;

      }
    }

    divEncontrado.innerHTML = `<h1>${total} usuário(s)<br>encontrado(s)</h1> `;
    divEncontrado.append(ul);

  });

  reloadThePage();

}

function estatistica(idade,i,sexo){
  divEstatistica.innerHTML = "";

  var qnt = i;
  var idadeRecebida = idade;

  console.log('idade:' +idadeRecebida);

  if (qnt === i) {
    soma += idadeRecebida;
    
   console.log('SOMA:' +soma);

    if(sexo === 'female'){
      sexoFemino++;
    }else {
      if (sexo === 'male'){
        sexoMasculino++;
      }
    }
  }

  var media = Math.round(soma/qnt);

  qntF = sexoFemino;
  qntM = sexoMasculino;

  divEstatistica.innerHTML = `<h1>Estatísticas</h1>
                              <p>
                              Soma das idades: ${soma}<br>
                              Media das idades: ${media}<br>
                              Sexo Feminino: ${qntF}<br>
                              Sexo Masculino: ${qntM} </p>`
                              ;

}


function countName(event) {
  count = event.target.value;
  count = count.length;

  if (count >= 1) {
    if (inputBuscar.type == "submit") {
      inputBuscar.style.backgroundColor = "rgb(0,206,209)";
      inputBuscar.disabled = false;
    }
  } else {
    clearInputButton();
    zerarVariaveis();
  }
}

function zerarVariaveis(){
  soma=0;
  sexoFemino=0;
  sexoMasculino=0;
}

function clearInputButton() {
  inputBuscar.style.backgroundColor = "rgb(112,128,144)";
  inputBuscar.disabled = true;
}

function clearInput() {
  divEncontrado.innerHTML = ` `;
  divEstatistica.innerHTML = ` `;
}