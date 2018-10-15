/* function Person() {
    
}

Person.prototype.getName = function () {
    
}

Person.prototype.getAge = function () {
    
} */

/* function Person() {}
Person.prototype = {
  constructor: Person,
  getName: function() {},
  getAge: function() {}
}; */

// 当构造函数 和 原型方法拥有同名属性/方法属性时，会优先访问构造函数中的属性/方法
// 函数归属于对象的属性时，则称之为“方法”，函数不归属时，则称之为“函数”
/* function Person(name,age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        console.log('private:' + this.name)
    }
}

Person.prototype.getName = function () {
    console.log('public:' + this.name);
}

var p1 = new Person("ycl",31);
p1.getName() */

//ES5中的，对象的继承
/* function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() {
  return this.name;
};

Person.prototype.getAge = function() {
  return this.age;
};

//构造函数继承
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

//原型继承
Student.prototype = Object.create(Person.prototype, {
  //不要忘记重新制定构造函数
  constructor: {
    value: Student
  },
  getGrade: {
    value: function() {
      return this.grade;
    }
  }
});

var s1 = new Student("ycl", 31, 3);
console.log(s1.getAge());
console.log(s1.getGrade());
console.log(s1.getName());
 */

/* 
//对象的属性描述
var person = {
  name: "Tom"
};

delete person.name;
console.log(person.name);

Object.defineProperty(person, "name", {
  configurable: false,
  value: "jake"
});

delete person.name;
console.log(person.name);

person.name = 'ycl';//configurable配置为false，属性值无法改变
console.log(person.name); */

/* 
//获取属性描述信息
var descrptor = Object.getOwnPropertyDescriptor(person,'name');
console.log(descrptor); */


/* 
//get/set , get和set都是针对于 name属性的 value描述而言的
var persion = {};
Object.defineProperty(persion, "name", {
  get: function() {
    // this.value = 'tom'
    return this.value;
  },
  set: function(newVal) {
    console.log(newVal);
    this.value = newVal;
  }
});

console.log(persion.name);
persion.name = "ycl";
console.log(persion.name);
 */

// 箭头函数中的 this，就是声明函数时所处上下文中的 this，它不会被其他方式所改变
// 在 ES6 中，使用...来表示展开运算符，它可 以展开数组/对象 。如果不使用展开运算符，则对象/数组还保持原样
const arrl = [1, 2, 3];
const arr2 = [...arrl, 4, 5, 6];
console.log(arr2)
