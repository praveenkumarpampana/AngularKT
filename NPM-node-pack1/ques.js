/**
 * http://usejsdoc.org/
 */

// function getFunc(i) {
// return function() {
// return i;
// };
// }

var myFunc = [];
for (var i = 0; i < 2; i++) {
	myFunc.push((function(i) {
		return function() {
			return i;
		};
	})());
}

console.log(myFunc[0]()); // 0
console.log(myFunc[1]()); // 1
