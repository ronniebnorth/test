var http = require('http');
var server = http.createServer(function(request,response){
	console.log('got a request');
	console.log(request.url);
	response.write('hello');
	response.end();
})

server.listen(80);


