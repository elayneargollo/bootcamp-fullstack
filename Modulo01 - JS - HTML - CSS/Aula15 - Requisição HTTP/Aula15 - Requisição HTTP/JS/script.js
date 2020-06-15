/*window.addEventListener('load', function(){
     fetch("https://randomuser.me/api/?seed=javascript&https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo=100&nat=BR&noinfo").then((res) => {
        res.json().then(data => {
            doShow(data);
        });
    }).catch(erro => {
    
    let myAlertText = document.createTextNode("Erro na requisição ... ");
    document.body.appendChild(myAlertText); 

    });
});*/


window.addEventListener('load', () =>{
    doFetchAsync();
});

async function doFetchAsync(){
    const res = await fetch("https://randomuser.me/api/?seed=javascript&https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo=100&nat=BR&noinfo");
    const json = await res.json();

    doShow(json);
}   

function doShow(data){
      
    let myAlertText = document.createTextNode('Soma das idades: ' +doReduceAge(data));
    document.body.appendChild(myAlertText); 
}

function doReduceAge(data){
    const totalAges = data.results.reduce((accumulator, current) =>{
        return accumulator + current.dob.age;
    },0);

    return totalAges;
}
