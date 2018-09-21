let fs = require('fs');


let event = {
    arr:[], //存放回调函数
    result:[], //存放结果
    on: function(fn) {
        this.arr.push(fn);
    },
    emit: function(data) {
        this.result.push(data);
        this.arr.forEach((fntemp) => {
            fntemp(this.result);
        });
    }
}

event.on(function(data){
    if(data.length === 2) {
        console.log('end');
    }
});


fs.readFile('./test1.js', 'utf-8', function (err, data) {
    console.log('read file 1');
    event.emit(data);
});

fs.readFile('./test2.js', 'utf-8', function (err, data) {
    console.log('read file 2');
    event.emit(data);
});