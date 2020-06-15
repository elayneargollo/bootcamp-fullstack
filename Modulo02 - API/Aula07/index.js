const express = require('express');
const app = express();

app.get('/teste?', (_,res) => {
    res.send('teste?');
});

app.get('/buzz', (_,res) => {
    res.send('/buzz');
});

/* captura o parametro id */
app.get('/testParam/:id', (_,res) => {
    res.send(req.params.id);
});

app.listen(3000);
