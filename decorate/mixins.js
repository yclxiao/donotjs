//关于exports的三种写法，想直接使用import需要，安装babel-preset-env，以及在.babelrc中配置 "presets": ["env"]
//这是因为Nodejs不支持import的语法，只支持require的语法，因此需要借助babel的力量

//1、直接用export default导出，在引用处直接使用 import  xxx from '...'
// export default function mixins(...list) {
//     return function (target) {
//         Object.assign(target.prototype, ...list);
//     }
// }

//2、使用module.exports = {} 导出多个模块，在引用处使用  import {xxx,yyy} from '...'
// module.exports = {
//     mixins: function (...list) {
//         return function (target) {
//             Object.assign(target.prototype, ...list);
//         }
//     },
//     mixinsTwo: function (...list) {
//         return function (target) {
//             Object.assign(target.prototype, ...list);
//         }
//     }
// }

//3、使用多个export funtion xxx(){} 导出多个模块，在引用处使用  import {xxx,yyy} from '...'
export function mixins(...list) {
    console.log(...list)
    return function (target) {
        Object.assign(target.prototype, ...list);
    }
}

export function mixinsTwo(...list) {
    console.log(...list)
    return function (target) {
        console.log('222')
        Object.assign(target.prototype, ...list);
    }
}