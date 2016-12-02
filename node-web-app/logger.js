/**
 * http://usejsdoc.org/
 */

function doLog(request, response, next) {

	var start = +new Date();
	var method = request.method;
	var url = request.url;
	var out = process.stdout;
	
	response.on('finish', function() {
		out.write(method+" to "+url +" took "+(new Date()-start)+" ms \n\n");
	});
	
	next();
}

module.exports=doLog;