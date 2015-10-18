var http = require('http');
var handler = function(req,res){
	console.log(req.url);
	console.log(req.method);
	if (req.url==="/") {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n');
	} else if (req.url==="/marketing") {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Buy Crap\n');
		
	} else if (req.url==="/uploads"){
		if (req.method==='POST'){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Handling it\n');
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<html><head><title>UPLOADZ!</title><body><form action="/uploads" method="POST" enctype="multipart/form-data"><input type="file" name="the_file"><input type="submit" value="Upload">');
		}
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('Page not Found. \n');
	}	
}

var server=http.createServer(handler);

server.listen(1337);

console.log('Server running at http://127.0.0.1:1337');