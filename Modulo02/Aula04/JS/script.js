const express = require('express'); // importação do Express
const app = express(); // será utilizado para configurar a aplicação
const port = 3000; // porta utilizada pela API

// app é uma instânica do Express
// definição da rota
app.get('/', (req, res) => res.send('Hello World!')); 
app.listen(port, () => console.log('App listening on port ${port}"'));