window.addEventListener('load', function(){
        fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo").then((res) => {
        res.json().then(data => {
            doMap(data);
        });
    });
});

function doMap(data){
    const nameArray =  data.results.map(person => {
        return {
            name: person.name.first,
            surName: person.name.last,
            age: person.dob.age
        };
    });

    console.log(nameArray);
}