

var compName = 'cts-hyd';

function f() {
    var compName = "cts";
    console.log(this.compName); // read context-data
}

f();