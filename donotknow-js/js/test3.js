// function NothinSpecial() {
//     console.log('do not mind me')
// }

// var a = new NothinSpecial()

// a

// console.log(this)
// function Foo(name) {
//     // console.log(this)
//     this.name = name
// }

// Foo('111')
// console.log(global.name)

// function Foo(name) {
//     this.name = name
// }
// Foo.prototype.myName = function () {
//     return this.name
// }
// var a = new Foo('a')
// var b = new Foo('b')
// console.log(a.myName())
// console.log(b.myName())

// function Foo() {
//     console.log(this)
// }
// console.log(Foo.prototype.constructor === Foo);
// var a = new Foo();
// console.log(a.constructor === Foo);

// function Foo() {
//     console.log(this)
// }
// // Foo.prototype = {
// //     aaa: '111'
// // }
// var a = new Foo()
// console.log(a.constructor === Foo)
// console.log(a.constructor === Object)


/* 
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function() {
  return this.label;
};

var a = new Bar("a", "obj a");
a.myName();
a.myLabel();
console.log(a.__proto__.__proto__.__proto__);
 */





function Animal(name) {
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
};

function Cat(name, age) {
  Animal.call(this, name);
  this.age = age || 1;
}
//创建对象：cat.__proto__指向Cat.prototype，
//而Cat.prototype包含（Animal.prototype 和 constructor），
//constructor又指向Cat函数本身，Cat构造函数就是Cat
Cat.prototype = Object.create(Animal.prototype, { constructor: Cat });
Cat.prototype.meow = function() {
  return `${this.getName()}  eowww~~~~~, I'm ${this.age} year(s) old`;
};

var cat = new Cat('kit',11)
console.log(cat.meow());
console.log(cat);


