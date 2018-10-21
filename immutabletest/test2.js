var Immutable = require("immutable");

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
console.log(jsNewSquares[1]);
