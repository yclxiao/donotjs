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
function New(func) {
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
console.log(p2.getName());
