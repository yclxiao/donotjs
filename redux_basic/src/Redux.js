
const createStore = (reducer, initValues, enhancer) => {
    let state = { ...initValues };

    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.')
        }

        return enhancer(createStore)(reducer, state)
    }


    const dispatch = (action) => {
        // 计算出新的state
        state = reducer(state, action);
        // state更新后的订阅的事件
        listener.forEach((fn) => {
            fn()
        });
    }

    /**
     * 实现一个简单的订阅者莫斯
     */
    const listener = [];
    const subscribe = (hanlder) => { listener.push(hanlder) }
    const unsubscribe = (hanlder) => {
        listener.forEach((fn, i) => {
            if (fn === hanlder) {
                listener.slice(i, 1);
            }
        })
    }

    const getState = () => {
        return state;
    }

    return {
        dispatch: dispatch,
        getState: getState,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    }
}

/**
 * 处理中间件
 * @param {*} middleware 
 */
const applyMiddleware = (...middlewares) => {
    return createStore => (...args) => {
        middlewares = middlewares.slice()
        middlewares.reverse()
        const store = createStore(...args);

        let dispatch = store.dispatch
        // 在每一个 middleware 中变换 dispatch 方法。
        middlewares.forEach((middleware) => {
            dispatch = middleware(store)(dispatch)
        })
        
        return {
            ...store,
            dispatch // 中间件处理过的dispatch覆盖原来的dispatch
        }
    }
}

export { createStore, applyMiddleware };