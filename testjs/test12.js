//任何函数，只要参数有回调函数，就能写成 Thunk 函数的形式。下面是一个简单的 Thunk 函数转换器。

function f(a, cb) {
  cb(a);
}

// ES6版本
const Thunk = function(fn) {
  return function(...args) {
    return function(callback) {
      return fn.call(this, ...args, callback);
    };
  };
};

const ft = Thunk(f);

ft(1)(console.log);
