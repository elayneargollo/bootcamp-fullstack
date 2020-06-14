const express = require('express'); // importação do Express
const app = express(); // será utilizado para configurar a aplicação
const port = 3000; // porta utilizada pela API


/* app é uma instancia do express, 
get é um método http,
/teste é o caminho que a rota irá responder,
função será executada quando a rota for atingida */

app.get('/', (req, res) => res.send('Hello World!')); /* localhost:3000/teste */
app.listen(port, () => console.log('App listening on port ${port}"'));