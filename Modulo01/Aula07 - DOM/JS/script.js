var title = document.querySelector('h1');
title.textContent = 'Elayne Natália de Oliveira' 

var city = document.querySelector('#city');
city.textContent = 'Camaçari';

var personalDataArray = document.querySelectorAll('.personal-data');
personalDataArray = Array.from(personalDataArray);

var data = Array.from(document.querySelectorAll('.data'));

for(var i=0; i<data.length; i++){
    var currentElement = data[i];
    currentElement.classList.add('emphasis');
}