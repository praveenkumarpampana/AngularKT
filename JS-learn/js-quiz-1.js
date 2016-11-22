

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

// Person('Abc',100); // never invoke constructor func without new-keyword

new Person('Abc',100);
