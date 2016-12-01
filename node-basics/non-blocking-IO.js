/**
 * http://usejsdoc.org/
 */

var fs = require("fs");

// non-blocking IO

fs.open('menu.txt', 'r', function(err, fd) {
	var buffer = new Buffer(100000);
	fs.read(fd, buffer, 0, 10000, null, function(err, bytesRead, buffer) {
		console.log(buffer.toString('utf8', 0, bytesRead));
		fs.close(fd, function() {
			// ....
		});
	});
});

console.log('continue with other work....');