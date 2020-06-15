/* carrega o modulo http do node */
var http = require ('http');

/* cria um servidor http e uma escuta para porta 8080 */
http.createServer (function (req, res){
    if((req.method === 'GET') && (req.url === '/test')){
        res.write('Get /test');
    }else {
        res.write('Hello world');
    }
    res.statusCode = 200;
    res.end();
}).listen(8080);