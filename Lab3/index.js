// Se carga el módulo para crear un servidor HTTP
var http = require('http');
var PUERTO = 8888; 

// Lo configuramos para que responda con un Hola Mundo! a todas las peticione
var server=http.createServer(function(request, response){
       console.log('Me han hecho una petición.');
       response.writeHead( 
              200, {"Content-Type": "application/json"});
       var data = { 'mensaje' : 'Hola Mundo' };
       response.end(JSON.stringify(data) + '\n');
});

// Lo ponemos a escuchar en el puerto 8888
server.listen(PUERTO);

console.log('Servidor corriendo en http://127.0.0.1:8888/');
