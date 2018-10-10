function logger(store) {
    // 这里的 next 必须指向前一个 middleware 返回的函数：
    // let next = store.dispatch

    // 1.我们之前的做法:
    // store.dispatch = function dispatchAndLog(action) {

    // 2.直接返回
    // return function dispatchAndLog(action) {
    //     console.log('dispatching', action)
    //     let result = next(action)
    //     console.log('next state', store.getState())
    //     return result
    // }

    // 3.另外一种实现链式调用的方式:
    return function wrapDispatchToAddLogging(next) {
        return function dispatchAndLog(action) {
            console.log('dispatching', action)
            let result = next(action)
            console.log('next state', store.getState())
            return result
        }
    }
}

export default logger;