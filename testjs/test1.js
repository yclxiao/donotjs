var myObject = {
    a:2,
    b:function(param){
        console.log(param)
    }
}

console.log(Object.getOwnPropertyDescriptor(myObject,"a"))
console.log(Object.getOwnPropertyDescriptor(myObject,"b"))

Object.defineProperty(myObject,'newpro',{
    value:2,
    writable:false,
    configurable:true,
    enumerable:false
})
myObject.newpro = 3
// console.log(myObject.newpro)

for (const k in myObject) {
    if (myObject.hasOwnProperty(k)) {
        const element = myObject[k];
        console.log(element)
    }
}

Object.preventExtensions(myObject)

myObject.kkk = 8

console.log(myObject.kkk)







