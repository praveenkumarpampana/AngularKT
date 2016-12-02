/**
 * http://usejsdoc.org/
 */


var mongoose=require("mongoose");

var productSchema = mongoose.Schema({
	id:String,
    name: String,
    price:Number,
    make:Date,
    desc:String
});
var Product = mongoose.model('Product', productSchema,"products");

module.exports=Product;