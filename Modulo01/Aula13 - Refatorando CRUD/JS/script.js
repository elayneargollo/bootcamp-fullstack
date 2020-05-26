
let globalNames = ['UM', 'DOIS','TRES', 'QUATRO','CINCO'];
let inputName = null;
let isEditing = false;
let currentIndex = null;


window.addEventListener('load', () => {
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    activateInput();
    render();
});

function preventFormSubmit(){

    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function updateName(newName){
    console.log(newName);
  //  console.log(currentIndex);
    globalNames[currentIndex] = newName;
    render();
}

function activateInput(){

    function insertName(newName){
       globalNames = [...globalNames, newName];
       render();
    }

    function handleTyping(event){
        if (event.key === 'Enter'){
            if(isEditing){
               updateName(event.target.value); 
            }else {
                insertName(event.target.value); 
            }

            isEditing = false;
        }
    }

    inputName.focus();
    inputName.addEventListener('keyup', handleTyping);
}

function render(){

    function createButton(i){
       
        function deleteButton(){
            globalNames = globalNames.filter((_, index)  => i !== index);          
            render();
        }

        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';

        button.addEventListener('click', deleteButton);

        return button;
    }

    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';

    var ul = document.createElement('ul');

    for(var i=0; i<globalNames.length; i++){

        var current = globalNames[i];
        var li = document.createElement('li');

        var button = createButton(i);
        var span = createSpan(current,i);
      
        li.appendChild(button);
        li.appendChild(span);

        ul.appendChild(li);
    }

    divNames.append(ul);
    clearInput();

}

function createSpan(name,i){

    function editItem(){
        inputName.value = name;
        inputName.focus();
        isEditing = true;
        currentIndex = i;
    }

    var span  = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);

    return span;

}

function clearInput(){
    inputName.value='';
    inputName.focus();
}

