/* 
//不使用高阶函数，我们是这么写的。。。其实高阶函数就是将一些公共逻辑进行封装
function commonFunc() {
    console.log('一端公共逻辑');
}

function welcome(username) {
    commonFunc();
    console.log('welcome ' + username);
}

function goodby(username) {
    commonFunc();
    console.log('goodby ' + username);
}

welcome('ycl');
goodby('ycl');
 */

//这是使用高阶函数的写法，其实就是将一些公共逻辑集中到一处进行封装
function commonFunc() {
  console.log("一端公共逻辑");
}

function welcome(username) {
  console.log("welcome " + username);
}

function goodby(username) {
  console.log("goodby " + username);
}

//wrapFunWithParam函数就是高阶函数，他接受一个函数为入参，再返回一个函数，这是es5的写法
/* function wrapFunWithParam(targetFun) {
  var newFunc = function(username) {
    commonFunc();
    targetFun(username);
  };
  return newFunc;
} */

//这是es6的写法，入参是一个函数，出参是另外一个函数
var wrapFunWithParam = targetFun => username => {
  commonFunc();
  targetFun(username);
};

var newWelcomen = wrapFunWithParam(welcome);
var newGoodby = wrapFunWithParam(goodby);

newWelcomen("ycl");
newGoodby("ycl");
