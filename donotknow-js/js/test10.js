//js 科里化
function add(x) {
  return function(y) {
    return x + y;
  };
}

console.log(add(1)(2));

var adOne = add(2);
console.log(adOne(3));

var adTwo = add(3);
console.log(adTwo(4));
