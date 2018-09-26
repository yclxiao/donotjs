//模块化在ES6之前是利用IIFF函数调用的

var module = (function(){
    var num = 5;

    function print(x) {
        console.log('----' + x);
    }

    function add(a) {
        var x = a + num;
        print(x);
        return x;
    }

    return {
        description: 'this is a discription',
        add: add
    }
})()

console.log(module.num) //num是私有的，无法方法
console.log(module.print(1)) //print也是无法访问
console.log(module.add(5)) //可以访问公开的属性和方法
console.log(module.description)
