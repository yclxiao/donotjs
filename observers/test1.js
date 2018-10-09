//这里做了个尝试，使用字面量创建的对象，没法New，因为没有构造函数constructor，
//所以想基于对象创建实例的话，必须要使用function的方式创建对象，比较好的方法是使用function创建对象以及构造函数以及私有方法和变量，可供继承的则放在原型链中
/* var Person = {
    name: '111',
    getName: function () {
        console.log(this.name)
    }
}

console.log(Person);

var p1 = new Person();
console.log(p1.name);
console.log(p1.getName());

p1.name = '222';
console.log(p1.getName()); */


/* function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    console.log(this.name);
}

var p1 = new Person('ycl')
console.log(p1.name);
p1.getName();

console.log(Person); */








