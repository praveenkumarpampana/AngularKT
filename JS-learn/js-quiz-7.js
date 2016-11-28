

var myFuncs = [];

function getFunc(i) {
    return function () { return i;};
}

for (var i = 0; i < 2; i++){
    myFuncs.push(getFunc(i));
}

//---------------------------

console.log(myFuncs[0]());   // 0
console.log(myFuncs[1]());   // 1