"use strict";

// var person = {
//     name: 'Nag',
//     age:32
// };

// Object.defineProperty(person, 'name', {configurable:false,writable:false});


// delete person.name;
// person.name = "";


// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

//---------------------------------------------



/*
   
   js-objs have 2 types of properties

   a. data-property
   b. accessor property

*/


var person = {
    _name: 'Nag',
    _age: 32,

    set name(name) {
        if (!name) {
            this._name = name;
        }    
    },    
    get name() {
        return this._name;
    },
    set age(age) {
        if (age > 0) {
            this.age = age;
        }     
    },    
    get age() {
        return this.age;
    }
};

person.name = '';       // write ( set )
console.log(person.name);  // read ( get )


//---------------------------------



// hot to check property exist ?


var person = {
    name:'Nag'
};

if (person.name) {
    console.log("name property exist...");
}

// or

// if ("name" in person) {
//     console.log("name property exist...");
// }
