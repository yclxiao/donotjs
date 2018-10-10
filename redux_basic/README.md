## 一、Redux解决了什么问题

从一段代码开始：

```javascript
const appState = {
    'First' : 0,
    'Second' : 1,
    'Third' : 2
}

const render = () => {
    document.getElementById('#first').value = appState['First']
    document.getElementById('#second').value = appState['Second']
    document.getElementById('#third').value = appState['Third']
}

render();
```

上面的代码很简单，首先定义了一个`appState`的全局变量，然后分别为页面上的三个元素赋值。

但是它存在一个重大的隐患，我们渲染数据的时候，使用的是一个共享状态 `appState`，==每个人都可以修改它==。如果我在渲染之前做了一系列其他操作：
```javascript
changeModel();
getDataFromDb();
// 一系列操作
... 
render();
```

前面任何一个函数对`appState`一旦有修改，就会影响页面的最终渲染的结果，而这个也会给我们排查问题带来很大的麻烦。

> 对共享数据的修改会发生不可预料的后果，所以很多地方都呼吁，避免使用全局变量

然而我们的组件直接确实需要共享一些状态，而且还有可能会对共享状态进行修改。这里的矛盾就是：**“模块（组件）之间需要共享数据”，和“数据可能被任意修改导致不可预料的结果”之间的矛盾。**

Redux提供了一种更优雅的方式来解决这个问题。

## 二、Redux的做法

按照React.js 团队的做法，把事情搞复杂一些，提高数据修改的门槛：模块（组件）之间可以共享数据，也可以改数据。但是我们约定，这个数据并不能直接改，你只能执行某些我允许的某些修改，而且你做任何修改必须通知我。

首先，由开发人员自己定义一个`dispatch`函数:
```javascript
const dispatch = (action) => {
    switch (action.type) {
        case 'INCREMENT':
            appState[action.caption] ++;
            break;
        case 'DECREMENT':
            appState[action.caption] --;
            break;
    }
}
```

想要对`appState`进行修改必须经过dispatch，而dispatch函数目前只处理两种操作:加1和减1。具体执行那种操作，是根据传过来的action，这里要求action必须有一个type字段，而且必须是INCREMENT和DECREMENT之一。

```javascript
// First +1
dispatch({type : 'INCREMENT', caption: 'First'});
// Third -1
dispatch({type : 'DECREMENT', caption: 'Third'});
```
我们还需要进一步的封装，把`appStore`封装到一个`createStore`里面：
```javascript
const createStore = (reducer, initState) => {
    const store = initState;
    const dispatch = (action) => {
        reducer(state, action);
    }
    const getStore = () => {
        return state;
    }
    return {
        dispatch: dispatch,
        getState: getState
    }
}
```

`createStore`负责生产`state`和`dispatch`，它接收两个参数:
> `reducer`就是根据不同的action对state进行不同的操作，这是由具体的业务决定的。
> `initState`就是传递的应用状态`store`。

它返回了两个函数`getState`和`dispatch`:
> `getState`就是将我们的`state`返回。
> `dispatch`就是负责根据传递的action调用reducer进行处理。

现在我们把代码修改为:
```javascript
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state[action.caption] ++;
            break;
        case 'DECREMENT':
            state[action.caption] --;
            break;
    }
}

const store = createStore(reducer, {
    'First' : 0,
    'Second' : 1,
    'Third' : 2
});

// First +1
store.dispatch({type : 'INCREMENT', caption: 'First'});
// Third -1
store.dispatch({type : 'DECREMENT', caption: 'Third'});
```

每个应用只需要自己通过`createStore`生成一个store, 传入一个处理state变化的函数reducer和一个初始状态。通过`store.dispatch`来修改数据，`getState`来获取数据。

### 通过发布订阅模式来监听数据变化

上面只是解决了如何修改数据的问题，但是往往需要我们同步更新页面。使用订阅发布模式来监听数据变化来同步更新页面：

```javascript
const createSore = () => {
    ...
    const dispatch = (action) => {
       reducer(state, action);
       listener.forEach((fn) => fn());
    }
    /**
     * 实现一个简单的订阅者模式
     */
    const listener = [];
    const subscribe = (hanlder) => { listener.push(hanlder) }
    
    return {
        dispatch: dispatch,
        getState: getState,
        subscribe: subscribe
    }
}
```
我们需要通过调用`store.subscribe`传入数据变化的监听函数:
```javascript
store.subscribe(() => {
    // 根据新的store渲染页面
    render(store.getStore());
});

store.dispatch({type : 'INCREMENT', caption: 'First'});
```
每当 dispatch 的时候，监听函数就会被调用，当数据变化时候进行重新渲染。

## 三、总结

通过上面一步一步的代码基本完成了一个阉割版的'Redux'。

因为`Redux`的store封装的很好，没有提供直接修改状态的可能，也就是说一个组件虽然能够访问全局唯一的Store,却不可能直接修改Store中的状态，这样就克服了全局变量的危险；修改store数据只能通过统一的action行为，很容易跟踪调试，这在多人协作开发大型应用和排查问题时非常重要。
