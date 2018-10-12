//递归
/* function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); */


// function factorial (n, total=1) {
//     if(n === 1){
//         return total
//     }
//     return factorial(n-1, n * total)
// }
// console.log(factorial(5))


/* var fs = (function test(num){
  console.log(num)
  if(num <= 1){
      return 1;
  }else{
      var result = num * test(num-1);
      return result;
  }
});
console.log(fs(5)); */

//递归函数，每次都会将函数的执行结果返回，函数继续执行自己
function test(num) {
  if (num === 1) {
    return num;
  }

  return num * test(num -1);
}

console.log(test(5))


