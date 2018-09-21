let fs = require('fs');

let temp = function () {
    /* 采用闭包的方式将这两个数据存在“背包”里 */
    let arr = [];
    let times = 0;
    return function(data) {
        times++;
        arr.push(data)
        if(times === 2) {
            console.log(arr.length)
        }
    }
    
}

let fn = temp();

fs.readFile('./test1.js', 'utf-8', function (err, data) {
    fn(data)
});

fs.readFile('./test2.js', 'utf-8', function (err, data) {
    fn(data)
});

// console.log(arr);