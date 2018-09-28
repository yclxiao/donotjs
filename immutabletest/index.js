// import {Immuteble} from 'immutable';

//immutable的2个好处：1、拷贝性能更高    2、与react结合使用的话，会保证外层组件每次都会渲染，因为地址变动了，但是子节点的数据可能节点没变化，子组件需要自己去做比对
let Immuteble = require('immutable');//node默认不支持import from 语法，因为Node是commonjs规范，而import是es6语法

let map1 = Immuteble.Map({});

for (let i = 0; i < 800; i++) {
    map1 = map1.set(Math.random(),Math.random());
}

console.log(map1)