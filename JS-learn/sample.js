
// eg.1

function f(b){
  var a = 12;
  return a+b+35;
}

function g(x){
  var m = 4;
  return f(m*x);
}

g(21);



// e.g.2

function foo() {
    throw new Error('oops');
}
function bar() {
    foo();
}
function baz() {
    bar();
}
baz();


// e.g.3

function foo() {
    foo();
}
foo();

// e.g.4


function longRunningFunc() {
    var i = 0;
    while (i < 5) {
        console.log('long........');
        i++;
    }
}

function shortRunningFunc() {
    console.log('short.');
}

longRunningFunc();
shortRunningFunc();

//---------------------------------------


// e.g.5

/*

    <button class="boy">button-1</button>
    <button class="girl">button-2</button>

*/

console.log('start...');
$.on('.boy', 'click', function handler1() { 
    console.log('im  boy...');
});
$.on('.girl', 'click', function handler2() { 
    console.log('im  girl...');
});

console.log(".....");
var i = 0;
while (i < 500) {
    console.log('long........');
    i++;
}

// e.g.6

$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");