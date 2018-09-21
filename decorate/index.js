// // @testable
// class MyTestableClass {

// }

// function testable(target){
//     target.isTestable = true
// }

// // console.log(MyTestableClass.isTestable)
// MyTestableClass = testable(MyTestableClass) || MyTestableClass
// console.log(MyTestableClass.isTestable)


// function testable(isTestable) {
//     return function(target) {
//         target.isTestable = isTestable;
//     }
// }

// @testable(false)
// class MyTestableClass {

// }

// console.log(MyTestableClass.isTestable)


// import {mixins,mixinsTwo} from './mixins';
// const Foo = {
//     foo() {
//         console.log('foo')
//     }
// }
// const Foo2 = {
//     foo2() {
//         console.log('foo2')
//     }
// }
// @mixins(Foo,Foo2)
// class MyClass { }

// let obj = new MyClass();
// obj.foo2();

/*
function readonly (target,name,descriptor) {
    console.log(target)
    console.log(name)
    console.log(descriptor)

    descriptor.writable = false;


    console.log(target)
    console.log(name)
    console.log(descriptor)
    
    return descriptor;
}


class Persion {
    @readonly
    name(){
        console.log(`${this.first} ${this.last}`)
    }
}

let persion = new Persion();
persion.first = "aaa";
persion.last = "bbb";
console.log(persion.name())
*/

function dosomething(name) {
    console.log(arguments)
    console.log(`hello ${name}`)
}

function loggingDecorator(wrapped) {
    console.log('doing decorator')
    return function() {
        console.log('begin execute');
        const result = wrapped.apply(this,arguments);
        console.log('end execute');
        return result;
    }
}

const wrapped = loggingDecorator(dosomething);
wrapped('ycl')




















