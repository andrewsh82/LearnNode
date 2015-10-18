var http = require('http');
var handler = function(req,res){
	console.log(req.url);
	if (req.url==="/") {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n');
	} else if (req.url==="/marketing") {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Buy Crap\n');
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('Page not Found. \n');
	}	
}

var server=http.createServer(handler);

server.listen(1337);

console.log('Server running at http://127.0.0.1:1337');