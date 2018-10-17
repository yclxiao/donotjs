var events = require('events');
var eventEmmiter = new events.EventEmitter();

var connectHandler = function connected(args) {
    console.log(`连接成功${args}`);
    eventEmmiter.emit('data_received', 'two');
}

eventEmmiter.on('connection', connectHandler);

eventEmmiter.on('data_received', function (args) {
    console.log(`数据接收成功${args}`);
})

eventEmmiter.emit('connection', 'one');

var result = [1, 2, 3].map((temp) => {
    return temp + 1;
})
console.log(result);

console.log('程序执行完毕');