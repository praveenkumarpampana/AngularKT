/**
 * http://usejsdoc.org/
 */

var lodash=require('lodash');
var copyArray=require('lodash/_copyArray.js');


var myUtil = {
	findMax : function(array) {
		return lodash.max(array);
	},
	copyArray:function(arr1,arr2){
		copyArray(arr1,arr2);
	}
};

console.log(myUtil.findMax([10,20]));

module.exports=myUtil;

