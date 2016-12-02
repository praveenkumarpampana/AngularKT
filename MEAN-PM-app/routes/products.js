/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();
var Product=require('../model/Product');

router.get("/",function(req, resp, next) {
	Product.find(function(err,docs){
		if(err){next(err);}
		resp.json(docs);
	});
});
router.get("/:id",function(req, resp, next) {
	Product.findOne({_id:req.params.id},function(err,doc){
		 resp.status(200).json(doc);
	 });
});

router.post("/",function(req, resp, next) {
	 var newProduct=new Product();
	 // req.body  ===> newProduct
	 Object.assign(newProduct,req.body);
	 newProduct.save(function(err,doc){
		 resp.status(201).json(doc);
	 });
});

router.put("/",function(req, resp, next) {
	var product=req.body;
	 Product.findOneAndUpdate({_id:product._id},product,function(err,doc){
		 resp.status(200).json(doc);
	 });
});

router['delete']("/:id",function(req, resp, next) {
	Product.remove({_id:req.params.id},function(err,doc){
		 resp.status(200).json(doc);
	 });
});









module.exports = router;