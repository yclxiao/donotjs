var protoObj = {
    aaa: 1,
    bbb: 2,
    ccc: function () {
        console.log('ccc')
    }
}

// console.log(protoObj);
console.log(protoObj['__proto__'])

var secondObj = Object.create(protoObj);
// console.log(secondObj)
// console.log(secondObj.aaa)
console.log(secondObj['__proto__'])

console.log(Object.__proto__)