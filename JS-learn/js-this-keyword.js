


// wy we need 'this' keyword' ?

// var person = {
//     name: 'Nag',
//     sayName: function () {
//         //console.log('im '+name);
//         //console.log("im "+person.name);
//         console.log("im "+this.name);
//     }
// };
// // person.sayName();
// var p = person;
// person = { name: 'Ria' };
// p.sayName();

//----------------------------------------------


// var p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// var p2 = { name: 'Ria', sayName: function () { console.log('im '+this.name);}};

function sayNameForAll(){
    console.log('im '+this.name);
}

var p1 = { name: 'Nag', sayName: sayNameForAll };
var p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ??  // function-invocation pattern ( context owned by global-obj, this ==> global-obj)
// p1.sayName();  // im Nag   // method invocation ( context owned by invoker-obj , this ==> invoker-obj)
// p2.sayName();  // im Ria

//------------------------------------------------



var greetService = {
    sayName: function (message,from) {
        console.log(message+ ' im '+this.name+": "+from);
    }
};

var p1 = { name: 'Nag' };
var p2 = { name: 'Ria' };


// greetService.sayName();

// way-1
// greetService.sayName.call(p1,"Hello","HYD");
// greetService.sayName.call(p2,"Hi","CHN");

//way-2
// greetService.sayName.apply(p1,["Hello","HYD"]);
// greetService.sayName.apply(p2,["Hi","CHN"]);

// way-3
// var newF = greetService.sayName.bind(p1,'dude','universe');
// // on event
// newF();


//------------------------------------------------------


// 1000+ person objs


function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im '+this.name);
    }
    this.sayAge = function () {
        console.log('im '+this.age+" old");
    }
}

var p1 = new Person('Nag', 32);  // constructor invocation ( context owned by new-obj , this==> new-obj)
//.......

//-----------------------------------------------------


// in JS-lang , can invoke functions in 4 ways

/*

    1. function invocation ( this  ==> global-obj)
    2. method invocation   ( this ==> invoker obj)
    3. constructor invocation ( this ==> new-obj )
    4. call/apply/bind invocation ( this ==> arg-obj )
    

*/

