var Immutable = require("immutable");

/* 
//immutable的惰性特点，只有取值的时候才会执行
var newSquares = Immutable.Seq.of(1, 2, 3, 4, 5, 6, 7, 8)
  .filter(function(x) {
    console.log("imutable对象的filter执行");
    return x % 2;
  })
  .map(x => x * x);
console.log(newSquares.get(1));

var jsNewSquares = [1, 2, 3, 4, 5, 6, 7, 8]
  .filter(function(x) {
    console.log("js对象的filter执行");
    return x % 2;
  })
  .map(x => x * x);
console.log(jsNewSquares[1]); */

/* var obj = {a:1}
var res = obj.a.b.c   //error
console.log(res); */

/* //immutable
var immutableData = Immutable.fromJS({ a: 1 });
var res = immutableData.getIn(["a", "b", "c"]); //undefined
console.log(res); */

/* 
var testObj = {}; //immutable如果遇到null 和 undefine则不会转成immutable对象，如果是{} 则会转成immutable对象
var res = Immutable.fromJS(testObj); //所以为了避免不知道有没有数据的情况导致后续操作出错，所以这里这样写：Immutable.fromJS(testObj || {});
console.log(res);
console.log(res.getIn("a")); //如果immutable对象不是null 或者 undefine，则这里不错报错，只是会出现undefine
 */

// console.log(JSON.stringify(Immutable.fromJS({ a: 1 })));

var obj = {
  a: 1,
  b: 2
};
var immuObj = Immutable.Map(obj);
console.log(Object.keys(immuObj));
console.log(immuObj.size);
console.log(Object.keys(immuObj).length);

for (const key in immuObj) {
  if (immuObj.hasOwnProperty(key)) {
    const element = immuObj[key];
    console.log(key + ":" + element);
  }
}
