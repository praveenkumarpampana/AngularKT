

/*

         we create func-bj in 2 ways

         1. function declaration
         2. function expression

*/

// 1. function declaration ( hoist with function-object);

// console.log(add(12, 13));

// function add(n1, n2) {
//     // console.log('one');
//     return n1 + n2;
// }

// console.log(add(12,13));


// 2. function expression

// console.log(add(12,13));

// var add = function (n1, n2) {
//     // console.log('two');
//     return n1 + n2; 
// }
// console.log(add(12,13));

//----------------------------------------------

// a. function as value

// function sayHello() {
//     console.log('hello...');
// }

// var sayHi = sayHello;
// sayHi();


// a. function as arg

// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('hello');
// }

// greet();
// greet(function () { console.log('ola..'); });

// // e.g

// var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort();
// nums.sort(function (a, b) { return a - b;});
// console.log(nums);


// c. function as return

// function teach() {
//     console.log('teach.....');
//     function learn() {
//         console.log('learning..');
//     }
//     return learn;
// }


// var learnFunc = teach();

// learnFunc();
// learnFunc();


//----------------------------------------------

// function reflect(a,b,c) {
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(12));


// function sum() {
//     var i = 0,
//         result = 0,
//         len = arguments.length;
    
//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }

//     return result;
// }


// function f1() {
//     return "no coffee";
// }
// // var f1 = new Function('...');
// function f1(money) {
//     return "capi";
// }
// // var f1 = new Function('...');

// console.log(f1());