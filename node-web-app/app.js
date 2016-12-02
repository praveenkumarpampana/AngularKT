/**
 * http://usejsdoc.org/
 */

var express = require("express");
var bodyParser = require('body-parser');
//var logger  = require('./logger');
//var morgan=require("morgan");

// var fs=require("fs");

var app = express();


//
// app.get("/", function(req, res) {
// res.send("Welcome to express world again");
// });
//
// app.get('/products',function(req,res){
// var
// products=[{name:'Laptop',price:3000,desc:'bla'},{name:'Mobile',price:2000,desc:'bla'}];
// //res.send(products);
// res.json(products);
// });
//
// app.get("/product-title.html", function(req, res) {
// var html="<div> <h4>Tititle</h4></div>";
// res.send(html);
// });
//
// app.get("/path", function(req, res) {
// res.redirect(301,"newpath");
// });
// app.get("/newpath", function(req, res) {
// res.send(" welcome to newpath");
// });

// -----------------------------------------------

// app.get("/", function(req, res) {
// // fs.readFile(__dirname+"/public/index.html", function(err, data) {
// // res.send(data);
// // });
// res.sendFile(__dirname+"/public/index.html");
// });
//
// app.get("/css/bootstrap.css", function(req, res) {
// res.sendFile(__dirname+"/public/css/bootstrap.css");
// });
//
//

// -----------------------------------------------

//app.use(logger);
////app.use(morgan());
//app.use(express.static('public'));
//
//app.get('/products', function(req, res,next) {
//	var products = [ {
//		name : 'Laptop',
//		price : 3000,
//		desc : 'bla'
//	}, {
//		name : 'Mobile',
//		price : 2000,
//		desc : 'bla'
//	} ];
//	res.json(products);
//});

//-----------------------------------------------



//app.get("/products", function(req, res) {
//	res.send(" products count - "+req.query.limit);
//});
//

//app.param("id",function(req,resp,next){
//	var id=req.params.id;
//	req.identity=id;
//	next();
//});
//
//
//app.get("/products/:id", function(req, res) {
//res.send(" products id - "+req.identity);
//});
//
//app.get("/customers/:id", function(req, res) {
//	res.send(" customers id - "+req.identity);
//});

//-----------------------------------------------------

//parse application/x-www-form-urlencoded 
var urlEncodedParser=bodyParser.urlencoded({ extended: false });

//parse application/json 
app.use(bodyParser.json());

app.post("/products", urlEncodedParser,function(req, res) {
	res.send(req.body);
});










app.listen(3000, function() {
	console.log('Listening on http://0.0.0.0:3000/');
});