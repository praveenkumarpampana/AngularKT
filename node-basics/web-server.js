/**
 * http://usejsdoc.org/
 */

var http = require("http");
var fs=require('fs');

var server = http.createServer(); // EventEmitter

server.on('request', function(req, res) {
	// .....
	// res.writeHead(200, {'Content-Type':"text/plain"});
	// res.write("Hello from Node");
	
	res.writeHead(200, {
		'Content-Type' : "video/mp4"
	});

	//	fs.readFile('jony.mp4', function(err, data) {
	//		res.write(data);
	//		res.end();
	//	});
	
	// Stream API
	var rs=fs.createReadStream("jony.mp4");
	//	rs.on('data', function(chunk) {
	//		console.log(chunk.length);
	//		res.write(chunk);
	//	});
	//	rs.on('end', function() {
	//		res.end();
	//	});
	rs.pipe(res);
	
	
});

server.listen(8080, function() {
	console.log('server at http://localhost:8080/');
});
