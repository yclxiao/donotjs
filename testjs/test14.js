/* function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test(); */

/* function f1() {
  var aaa = 999;

  aAdd = function() {
    aaa = aaa + 1;
  };

  return function bbb() {
    console.log(aaa);
  };
}

var result = f1();
result();
aAdd();
result(); */

/* var a = 20;
function foo() {
    var a = 1;
    var obj = {
        a: 10,
        c: this.a + 20
    }

    return obj.c
}
console.log(this)
console.log(foo()); */

/**
// 函数中的this是在运行时候决定的，而不是函数定义时。
// this指向：使用new时指向新创建出来的实例
function test() {
  console.log(this);
  return function nnn() {
    console.log(this);
  };
}
var te = new test();
te(); //就算使用了闭包，但是函数相当于直接调用，所以还是指向全局对象
 */

//就算使用了闭包，但是函数相当于直接调用，所以还是指向全局对象
//对象中的嵌套函数的this指向不是当前对象，而是window
/**
 * 解决this指向问题有3中方法：
 * 1、使用es6箭头函数
 * 2、通过将this重复赋值给_that，_that = this;
 * 3、通过bind改变this
 */
var name = "global.name";
var obj = {
  name: "obj.name",
  getName: function() {
    console.log(this.name);
    return function() {
      console.log(this.name);
    };

    /* var _that = this;
    return function() {
      console.log(_that.name);
    }; */

    /* return function() {
      console.log(this.name);
    }.bind(this); */

    /* return () => {
      console.log(this.name);
    }; */
  }
};
obj.getName()();
