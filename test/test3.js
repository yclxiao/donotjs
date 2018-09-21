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



function Foo(name) {
    this.name = name
}

Foo.prototype.myName = function () {
    return this.name
}

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}

Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.myLabel = function () {
    return this.label
}

var a = new Bar("a", "obj a")
a.myName();
a.myLabel();
console.log(a.__proto__.__proto__.__proto__)
















