

// closure

/*
A closure is a function having access to the parent scope,
even after the parent function has closed.

why we need ?

--> to abstract public-behav any js-module
--> while invoking function async , to access parent-context 

*/

function teach(sub) {
    console.log('teaching ' + sub);
    var notes = sub + "-notes"
    var i = 100;
    function learn() {
        console.log('learning '+notes);
    }

    console.log('teaching finished...');

    return learn;
} // context-destroy

var learnFunc=teach('.js'); // new-context with args+locals

learnFunc();
learnFunc();

