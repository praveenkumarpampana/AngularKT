


function Person(name,age) {
    this.name = name;
    this.age = age;

    return {
        prop: 'value'
    };
}

var p =  new Person('Ria', 0);
console.log(p.name);