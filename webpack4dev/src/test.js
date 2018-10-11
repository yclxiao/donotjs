let testFile = 1;

export default (name) => {
    testFile++;
    return name + testFile;
}

//之前由于不理解testFile到底是不是属于全局变量而疑惑，经测试和思考，testFile不是全局变量，外部取不到，他是整个文件的私有变量
//根据我的理解：整个文件最终会被编译成一个立即执行函数，只是对外暴露export defalut的部分，应该跟以下两种写法类似
//此处是利用立即执行函数和闭包，但是由于闭包是包含在立即执行的函数里，被锁死在里面，不会造成变量污染，应该也不会造成内存溢出

/* var Module = (function () {
    var testFile = 1;
    var test = function(name) {
        testFile++;
        return name + testFile;
    }
    return test;
})();
console.log(Module('aaa'))
console.log(Module('bbb')) */


/* var Module = (function() {
    var testFile = 1;
    return {
        test: function (name) {
            testFile++;
            return name+testFile;
        }
    }
})()
console.log(Module.test('aaa'));
console.log(Module.test('bbb')); */


/* var Person = (function() {
    var test = 1;

    function Person(name, age, grade) {
      var _this = this;
  
  
      this.c = 20;
  
      this.getAge = function() {
        //这种写法以及下面的写法类似，表示将方法添加到构造函数中
        return this.age + test;
      };
  
      this.getGrade = function() {
        return _this.grade;
      };
  
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  
  
    return Person;
  })();

  var p1 = Person("111",22,4)
  console.log(p1) */