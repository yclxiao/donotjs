/* const promise = new Promise(function (resolve,reject) {
    //do something
    if (true) {
        resolve(value);
    } else{
        reject(value);
    }
}); */

function timeout(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms, "done");
  });
}

/* timeout(2000).then(
  value => {
    console.log("value:" + value);
  },
  err => {
    console.log("err:" + err);
  }
);
 */

/* async function asyncPrint(value, ms) {
  let f = await timeout(ms);
  console.log(f);
  console.log(value);
}

asyncPrint('hello world',2000); */

function* foo() {
  yield 1;
  yield 2;
  return 3;
}
for (let v of foo()) {
  console.log(v);
}

