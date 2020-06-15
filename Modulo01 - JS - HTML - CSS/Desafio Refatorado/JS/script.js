let button = null;
let usuario = null;

let allUser =[];
let foundUsers = [];

let countCountries = 0;
let countFavorites =0 ;

let totalSumAge = 0;
let totalSexfeminine = 0;
let totalSexMale = 0;
let mediaAge = 0;

let totalUser = null;
let tabStatistic =null;
let tabUser = null;

let numberFormat = null;


window.addEventListener('load', () =>{
    usuario = document.querySelector('#user');
    button = document.querySelector('#buscar');

    tabUser = document.querySelector('#tabUser');
    totalUser = document.querySelector('#totalUser');
    tabStatistic = document.querySelector('#tabStatistic');

    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();
});

async function fetchCountries(){
    const res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
    const json = await res.json();

    allUser = json.results.map(user => {

       const {name, lastName, age, gender, picture} = user;

        return {
            name : user.name.first,
            lastName : user.name.last,
            age : user.dob.age,
            gender: gender,
            picture: user.picture.thumbnail            
        };
    });

    render();
}

function startRender(){
    filterName();
    renderList();    
    renderStatistics();
}

function renderStatistics(){
    sumAge();
    sexFeminine();
    sexMale();
    totalMediaAge();
    statistics();    
    reloadThePage();
}

function statistics(){

    statistic.innerHTML = `Estatísticas`;
    let statisticsHTML = '<div>';

        const statisticHTML = `
            <div class='statistic'>
                <div>
                    <li>Sexo masculino: ${totalSexMale}</li>
                    <li>Sexo feminino: ${totalSexfeminine}</li>
                    <li>Soma das idades: ${totalSumAge}</li>
                    <li>Média das idades: ${mediaAge}</li>
                </div>
            </div>`;

        statisticsHTML += statisticHTML;

    tabStatistic.innerHTML = statisticsHTML;
}


function totalMediaAge(){
    mediaAge = parseFloat((totalSumAge / foundUsers.length).toFixed(2));
}

function sexMale(){
    let cont =0;

    totalSexMale = foundUsers.forEach((user) => {
        if (user.gender === 'male'){
            cont++;
        }
    });

    totalSexMale = cont;             
}

function sexFeminine(){
    let cont =0;

    totalSexfeminine = foundUsers.forEach((user) => {
        if (user.gender === 'female'){
            cont++;
        }
    });

    totalSexfeminine = cont;
           
}

function sumAge(){

    totalSumAge  = foundUsers.reduce((acc, curr) =>{
        return acc + curr.age;
    },0);

}

function render(){
  
    function handleTyping(event){
        activeButton();  

        if (event.key === 'Enter'){
            startRender();
        }
    }

    user.focus();
    user.addEventListener('keyup', handleTyping);
    button.addEventListener('click', ()=> {
        startRender();
    });
}

function renderList(){

    totalUser.innerHTML = `${foundUsers.length} usuário(s) encontrado(s)`;
    let usersHTML = '<div>';

    foundUsers.forEach((user) => {
        
        const {name, lastName, age, gender, picture} = user;
        const userHTML = `
            <div class='user'>
                <div>
                    <img src='${picture}' alt='${name}'>
                </div>
                <div>
                    <li>${name} ${lastName}</li>
                    <li>${age} anos</li>
                </div>
            </div>`;

        usersHTML += userHTML;
    });

    tabUser.innerHTML = usersHTML;
}

function filterName(){

    foundUsers = allUser.filter((user) => {

      const first = user.name.toLowerCase();
      const last = user.lastName.toLowerCase();

      const findName = usuario.value.toLowerCase();
      
      const foundName = first.includes(findName);
      const foundLastname = last.includes(findName);

      if (foundName || foundLastname) {
        return user;
      }
    }).sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

}

function activeButton(){
    
    button.style.backgroundColor = "rgb(0,206,209)";
    button.disabled = false;

}

function reloadThePage() {    
    setTimeout("location.reload(true);",5000);    
} 
  