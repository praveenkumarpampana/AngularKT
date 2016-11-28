



function Person(name,age) {
    this.name = name;
    this.age = age;
    var self = this;
    
    setInterval(()=>{
        this.age++;
        console.log(this.age);
     },1000);    

}

var p=new Person('Ria',0);