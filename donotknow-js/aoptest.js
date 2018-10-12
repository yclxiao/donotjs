Function.prototype.before = function(beforefn) {
  var _self = this;
  console.log(this+'111');//因为是fun调用的before，所以this指向func
  return function () { //此返回函数，被重新复制给了fun，然后最后一样直接调用func()，这种调用this会指向global
      console.log(this);
    beforefn.apply(this, arguments);
    return _self.apply(this, arguments);
  }
};

Function.prototype.after = function(afterfn) {
  var _self = this;
  console.log(this+'222')
  return function () {
    console.log(this);
    var ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  }
};

var func = function() {
  console.log(2);
};

func = func
  .before(function() {
    console.log(1);
  })
//   .after(function() {
//     console.log(3);
//   });

func();
