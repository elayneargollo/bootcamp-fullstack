var events = require ('events'); // cria, dispara e escuta eventos
var eventEmitte = new events.EventEmitter(); // permite adcionar callbacks para o evento

eventEmitte.on ('testEvent', function () { // escuta um evento
    console.log('Teste event done');
});

eventEmitte.emit("testEvent")