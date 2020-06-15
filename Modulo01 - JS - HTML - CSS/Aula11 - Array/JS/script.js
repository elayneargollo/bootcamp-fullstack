window.addEventListener('load', () => {
   doMap();
   doFilter();
   doForEach();
   doReduceAge();
   dofindFirstMG();
   doSome();
   doEvery();
   doSort();
});

function doSort(){
    const mappedPeople = people.map(person => {
        return {
           name: person.name.first
        };
    }).filter(person => person.name.startsWith('A'))
    .sort((a,b) => {
       return  a.name.localeCompare(b.name);
    });

    console.log(mappedPeople);
}

function doEvery(){
    const every = people.every(person => {
        return person.nat === 'BR';
    });

    console.log(every);
}

function doSome(){
    const found = people.some(person =>{
        return person.location.stats === 'Amazonas';
    });

    console.log(found);
}

function dofindFirstMG(){
    const found = people.find(person => {
        return person.location.state === 'Minas Gerais'
    });

    console.log(found);
}

function doReduceAge(){
    const totalAges = people.reduce((accumulator, current) =>{
        return accumulator + current.dob.age;
    },0);

    console.log(totalAges);
}

function doMap(){
    const nameArray = people.map(person => {
        return {
            name: person.name.first,
            surName: person.name.last,
            age: person.dob.age
        };
    });
    return nameArray;
}

function doFilter(){
    const olderThan50 = people.filter(person => {
        return person.dob.age > 50;
    });
    console.log('idade')
    console.log(olderThan50);
}

function doForEach(){
    const mappedPeople = doMap();
   
    console.log('doMap');
    console.log(doMap());

    mappedPeople.forEach(person => {
        person.anos = 'anos';
    });

    console.log('doForEach')
    console.log(mappedPeople);

}