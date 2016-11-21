
// console.log('hello....');

// primitives

// string
var name = "Nag";
var selection = 'a';

// number
var count = 12;
var cost = 12.12;

// boolean
var found = false;

/*
    note:

    in JS , falsy values

    false,0,"",null,undefined,NAN

*/


// undefined
var v;

// null
var person = null;

//----------------------------------------------

// reference types ===> objects

/*

    how to create obj in JS-lang?

    var ref=new ConstructorFunction();

    e.g

    new Object();
    new Person();

*/

var person = new Object();
person.name = 'Nag';
person.age = 32;
person.work = function () {
    console.log("working...");
};

delete person.age;

//-------------------------------------------------

// literal style objects

// a. Object

var person = new Object();
person.name = 'Nag';
person.age = 32;
person.work = function () {
    console.log("working...");
};


// or 

var newPerson = {
    name: 'Nag',
    age: 32,
    work: function () { console.log('working...');}
};


// c. Array

var arr = new Array();
arr.push('item1');
arr.push('item2');
// or
var newArr = ["item1", "item2"];


// c. RegExp
var ssnPattern = new RegExp("\\d{3}-\\d{2}-\\d{4}");
// or
var newSSNPattern = /\d{3}-\d{2}-\d{4}/;

// d. Function

var add = new Function("n1", "n2", "var result=n1+n2;return result;");

// or

function newAdd(n1,n2) {
    var result=n1+n2;return result;
}


newAdd.props = 123;
newAdd.method = function () {
    //....
}


//------------------------------------------------


// how to access obj's propeties

/*

    2-ways

    1. '.' notation ==> when property is valid identifier
    
    else

    2. '['property']'

*/

var person = {
    name: 'Nag',
    'full-name':'Nag N'
};

console.log(person.name);
console.log(person['full-name']);