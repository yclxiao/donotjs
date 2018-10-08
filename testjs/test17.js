//以es6的语法写个类
class Person {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getName() {
    //这种写法表示将方法写在原型中，可以给别的类继承到
    return this.name;
  }

  static a = 20; //这种写法是静态属性，表示Person.a = 20
  c = 20; //这种写法是私有属性，表示在构造函数中添加属性 this.c = 20

  getAge = function() {
    //这种写法以及下面的写法类似，表示将方法添加到构造函数中
    return this.age;
  };

  getGrade = () => {
    return this.grade;
  };
}

console.log(Person.prototype);

class Student extends Person {
  constructor(name, age, grade, classes) {
    super(name, age, grade);
    this.class = this.classes;
  }

  getClasses() {
    return this.class;
  }
}

//////////////////////以上代码经过babel转换之后变为/////////////////////////

("use strict");

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = (function() {
  function Person(name, age, grade) {
    var _this = this;

    _classCallCheck(this, Person);

    this.c = 20;

    this.getAge = function() {
      //这种写法以及下面的写法类似，表示将方法添加到构造函数中
      return this.age;
    };

    this.getGrade = function() {
      return _this.grade;
    };

    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  _createClass(Person, [
    {
      key: "getName",
      value: function getName() {
        //这种写法表示将方法写在原型中，可以给别的类继承到
        return this.name;
      } //这种写法是静态属性，表示Person.a = 20
      //这种写法是私有属性，表示在构造函数中添加属性 this.c = 20
    }
  ]);

  return Person;
})();

Person.a = 20;

console.log(Person.prototype);

var Student = (function(_Person) {
  _inherits(Student, _Person);

  function Student(name, age, grade, classes) {
    _classCallCheck(this, Student);

    var _this2 = _possibleConstructorReturn(
      this,
      (Student.__proto__ || Object.getPrototypeOf(Student)).call(
        this,
        name,
        age,
        grade
      )
    );

    _this2.class = _this2.classes;
    return _this2;
  }

  _createClass(Student, [
    {
      key: "getClasses",
      value: function getClasses() {
        return this.class;
      }
    }
  ]);

  return Student;
})(Person);
