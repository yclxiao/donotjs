/* let promise = new Promise(() => console.log("success"), () => console.log("error"));
promise.then(console.log("then - success")); */

/* let promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("hello");
  }, 2000);
});
promise2
  .then(value => {
    console.log(`result:${value}`);
  })
  .then(error => {
    //第一个then结束后，继续执行第二个then
    console.log(`error:${error}`);
  }); */

/* console.log("start");
new Promise(resolve => {
  setTimeout(() => {
    throw new Error("error");
  }, 2000);
})
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  }); */

/*   
// new Promise接受一个执行器 exector，exector有两个函数resolve  reject，
// 当执行reject时，有两种方式接受参数：1、.catch  2、.then()里的第二个参数
// then  catch 都会返回promise实例，只要抛出错误，状态就为reject状态
// 建议在所有队列最后，增加.catch
// .then()有两个参数，第一个是resolve函数，第二个是reject函数.....catch只有一个参数reject函数
new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("success");
    reject("error");
  }, 2000);
})
  .then(value => {
    console.log(`success : ${value}`);
  })
  .catch(error => {
    console.log(`error : ${error}`);
  });

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error");
  }, 2000);
}).then(
  value => {
    console.log("success:" + value);
  },
  error => {
    console.log("error:" + error);
  }
);
 */

/* let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 success");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fail");
  }, 1500);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 success");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then(value => { //正常返回的是个数组
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });
 */

/* 
//一个简单的功能：遍历某个文件夹下的文件，在比对出每个文件夹的大小，得出最大的文件
//使用promise.all的方式
var fs = require("fs");
var path = require("path");
var filePath = path.resolve("./");

new Promise((resolve, reject) => {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      reject(err);
    } else {
      resolve(files);
    }
  });
})
  .then(files => {
    return Promise.all(
      files.map(file => {
        return new Promise((resolve, reject) => {
          fs.stat(path.join(filePath, file), (err, stat) => {
            if (err) {
              reject(err);
            }
            if (stat.isDirectory()) {
              return resolve({ size: 0 });
            }
            stat.file = file;
            resolve(stat);
          });
        });
      })
    );
  })
  .then(stats => {
    let biggest = stats.reduce((memo, stat) => {
      if (memo.size < stat.size) {
        return stat;
      }
      return memo;
    });
    return biggest.file;
  })
  .catch(err => {
    console.log(err);
  })
  .then(result => {
    console.log(result);
  }); */

/* 
Promise.resolve()
  .then(value => {
    console.log("step 1");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("step2");
      }, 2000);
    });
  })
  .then(value => {
    console.log(value);
  });
 */

/* 
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1111");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2222");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("3333");
  }, 1500);
});

Promise.race([p1, p2, p3]).then(
  value => {
    console.log("success:" + value);
  },
  error => {
    console.log("fail:" + error);
  }
);
 */

function resolveAfter2Second(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
      //   reject(x);
    }, 2000);
  });
}

//async   await 的语言也是promise语句，resolve(param)这个param则是成功返回的结果，
//如果promise里面返回了reject，则需要加个try catch
async function f1() {
  try {
    let result = await resolveAfter2Second(10);
    console.log("success:" + result);
  } catch (error) {
    console.log("error:" + error);
  }
}
f1();
