//递归
/* function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); */


// function factorial (n, total=1) {
//     if(n === 1){
//         return total
//     }
//     return factorial(n-1, n * total)
// }
// console.log(factorial(5))


/* var fs = (function test(num){
  console.log(num)
  if(num <= 1){
      return 1;
  }else{
      var result = num * test(num-1);
      return result;
  }
});
console.log(fs(5)); */

//递归函数，每次都会将函数的执行结果返回，函数继续执行自己
/* function test(num) {
  if (num === 1) {
    return num;
  }

  return num * test(num -1);
}

console.log(test(5)) */


/* var foo = function() { // 赋给变量 foo 的匿名函数
  console.log('foo')
};

var x = function bar(){ // 赋给变量 x 的命名函数 bar
  console.log('bar');
  
};

foo(); // 实际执行函数
x(); */

function add(x, y) {
  return x + y;
}

var myObject = {
  value: 1
};
myObject.double = function () {
  var that = this; //此处因为是myObject.double()的调用方式，所以this是指myObject
  var helpler = function () {
    console.log(this);
    console.log(that);
    that.value = add(that.value, that.value);//that是由于先被赋值了，所以指的是myObject对象
    this.value = add(this.value, this.value);//this只是全局对象，所以是undefine
  }
  helpler();//此处help是直接调用，this是指全局对象
}
myObject.double();
console.log(myObject.value);