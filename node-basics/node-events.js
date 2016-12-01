/**
 * http://usejsdoc.org/
 */


var EventEmitter = require('events');
var util=require("util");


//var ee=new EventEmitter();
//
//ee.on('some-event',function(){
//	console.log('some-event handled...');
//});
//ee.on('other-event',function(){
//	console.log('other-event handled...');
//});
//
//
//
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('other-event');

//---------------------------------------


function Door(){
	this.open=function(){
		console.log('door opened...');
		this.emit("open",{num:'4',floor:'8'});
	};
	this.close=function(){
		console.log('door closed...');
		this.emit("close",{num:'4',floor:'8'});
	};
}
util.inherits(Door, EventEmitter);

var door=new Door();

//------------------------------------------------

var light={
		init:function(){
			door.on('open', function(e) {
				console.log('Lights ON in '+e.num+" "+e.floor);
			});
			door.on('close', function(e) {
				console.log('Lights OFF in '+e.num+" "+e.floor);
			});
		}
};

var AC={
		init:function(){
			door.on('open', function(e) {
				console.log('AC ON in '+e.num+" "+e.floor);
			});
			door.on('close', function(e) {
				console.log('AC OFF in '+e.num+" "+e.floor);
			});
		}
};

light.init();
AC.init();

//------------------------------------------------


setTimeout(function() {
	door.open();
}, 2000);

setTimeout(function() {
	door.close();
}, 4000);












