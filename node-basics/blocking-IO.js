/**
 * http://usejsdoc.org/
 */


var fs=require("fs");

// blocking IO
var fd=fs.openSync("menu.txt", "r");//..................
var data=fs.readFileSync(fd, "utf8");//..............................
console.log(data);

console.log('continue with other work....');