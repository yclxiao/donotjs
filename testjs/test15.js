/* Array.prototype._map = function (fn,context) {
    var temp = [];
    
    if (typeof fn == 'function') {
        var len = this.length;
        var k = 0;
        for (; k < len;k++) {
            console.log(context);
            console.log(this)
            temp.push(fn.call(context,this[k],k,this));          
        }
    } else {
        console.error('type error')
    }
    return temp;
}

var newArr = [1,2,3,4]._map(function (item,i,obj) {
    return item + 1;
})
console.log(newArr); */

/* function higerFun(fn) {
    console.log(111);
    fn.call(null,222);
}

higerFun(function (param) {
    console.log(param);
}) */

/**
 * 模拟构造函数
 */
/* function New(func) {
  var res = {};
  if (func.prototype !== null) {
    //原型链：
    //儿子的prototype 包含了自定义的原型方法，以及__proto__，此__proto__指向了父亲的prototype.
    //父亲的protytype中的__proto__最终指向Object的prototype，Object的prototype里的__proto__是null.
    //构造函数constructor包含在prototype中
    res.__proto__ = func.prototype;
  }

  //arguments包含了所有参数，包括func，所以此处把func截掉，取剩余参数，不过slice是纯函数，不会改变arguments入参
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));

  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return res;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() {
  return this.name;
};

var p1 = New(Person, "jake", 18);
var p2 = New(Person, "Tom", 20);
console.log(p1.getName());
console.log(p2.getName()); */



/* function fn1() {
    console.log('111');

    var fn2 = function () {
        console.log('222');
        return 222;
    }

    fn2.toString = function () {
        console.log('333');
        return 333;
    }

    return fn2;
}
var ffn2 = fn1();
console.log(ffn2()); */


// 知识点是函数的隐式转换。 当函数直接参与其他计算时 ， 函数会默认调用 toString 方法，直接将函数体转换为字符串参与计算
/* function fn() {
    return 20;
}

fn.toString = function () {
    return 30;
}

console.log(fn + 10); */



//利用闭包先收集所有入参，再利用递归每次都返回函数，最终利用toString把所有参数执行操作

//科里化实现方式一
function addOther(){
    var args = [].slice.call(arguments);
    var fn = function(){
        var newArgs = args.concat([].slice.call(arguments));
        return addOther.apply(null,newArgs);
    } 
    fn.toString = function(){
        return args.reduce(function(a, b) {
            return a + b;
        })
    }
    return fn ;
}

console.log(addOther(1)(2,3)+'') //6
console.log(addOther(1)(2)(3)(4)(5)+'') //15



//科里化实现方式二，感觉这种方式更好理解，就简单的闭包 和 _adder的递归
var add = function() {
    var _args = [].slice.call(arguments);

    var adder = function () {
        var _adder = function () {
            //[].push.apply(_args, [].slice.call(arguments)) ;
            _args.push(...arguments);//此处使用...只是为了获取参数的值，argument:  [Arguments] { '0': 1 }   ...argument: 1
            return _adder;
        }

        _adder.toString = function () {
            return _args.reduce(function (a,b) {
                return a + b;
            })
        }
        return _adder;
    }
    // return adder.apply(null, _args);
    return adder(_args);
}

console.log(add(1)(2)(3)(4)(5)+'');
console.log(add(1,2,3,4,5)+'');

