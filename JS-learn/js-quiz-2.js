
function startSession() {

function Trainer(name){
    this.name = name;
    this.doTeach=function () {
        console.log(this.name + " teaching .js");
        var self = this;
        function doLearn() {
            console.log(this.name +' learning .js from '+ self.name);
        }
        return doLearn;
    }
};

var nagTrainer = new Trainer(name); // constructor-invocation
var learnFunc = nagTrainer.doTeach(); // method invocation

var emp1 = { name: 'A' };
var emp2 = { name: 'B' };

learnFunc.call(emp1); // call/apply/bind invocation
learnFunc.call(emp2);    

}

startSession();  // function invocation