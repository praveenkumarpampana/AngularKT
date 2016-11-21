


// console.log(v);
// var v = 12;

//--------------------

var v = 12;
function f1() {
    function f2() {
        console.log(v);    
    }
    var v = 13;
    //f2();
    return f2;
}

var f2Func = f1();
f2Func();