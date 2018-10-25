/* var func1 = function(state = { aaa: "111" }, action) {
  console.log("func1");
  return Object.assign({}, state);
};

var func2 = function(state = { bbb: "222" }, action) {
  console.log("func2");
  return Object.assign({}, state);
};

var func3 = function(state = { ccc: "333" }, action) {
  console.log("func3");
  return Object.assign({}, state);
};

function combineFunc(funcs) {
  return function(state = {}, action) {
    let combineState = {};
    Object.keys(funcs).forEach(name => {
      combineState[name] = funcs[name](state[name], action);
    });
    return combineState;
  };
}

let funcs = combineFunc({
  func1,
  func2,
  func3
});
console.log(funcs({ func1: "444" }, "action1"));
 */

/* var store = {
  dispatch: function() {
    console.log("dispatch");
  }
};

function modifyDispath(store) {
  let temp = store.dispatch;
  store.dispatch = function() {
    console.log("begin");
    temp();
    console.log("end");
  };
  return store;
}

store.dispatch()
modifyDispath(store).dispatch();
 */

/* 
//这里换成函数
let result = [1,2,3,4,5,6].reduce((a,b) => {
    console.log(a);
    console.log(b);
    
    return a + b;
})
console.log(result); */

//reduce费解的两个例子，其实融入了大量的函数式编程理念
//示例一：对函数进行reduce，然后返回函数，挨个儿执行函数
let f1 = function(param1) {
  console.log(",,,,,1,,", param1);
  return param1 + 3;
};

let f2 = function(param2) {
  console.log(",,,,,2,,", param2);
  return param2 + 2;
};

let f3 = function(param3) {
  console.log(",,,,,3,,", param3);
  return param3 + 1;
};

let resultFuc = [f1, f2, f3].reduce((a, b) => {
  console.log("++++", a);
  console.log("++++", b);
  return function funtemp(...args) {
    console.log("------", ...args);
    return a(b(...args));
  };
});

console.log("//////", resultFuc);
console.log("result: ", resultFuc(1));

//以上程序可翻译成如下代码
let result = (function funtemp(...args) {
  console.log("------", ...args);
  return (function funtemp(...args) {
    console.log("------", ...args);
    return f1(f2(...args));
  })(f3(...args));
})(1);
console.log(result);

//示例二：对函数进行reduce,返回函数，将每个函数都执行，再作为reduce的callback
//让一个数组里的对象，挨个儿执行一个数组中的多个函数，可简化成如下形式
/* callback = function(func = [fn1, fn2, fn3]) {
  return (targetInit, targetCurrent) => {
    return func.reduce(function(initVal, curentVal) {
      curentVal(targetInit, targetCurrent);
      return targetInit;
    }, {});
  };
};
[(1, 2, 3, 4, 5)].reduce(callback, {}); */

var reducers = {
  totalInEuros: function(state, item) {
    return (state.euros += item.price * 10);
  },
  totalInYen: function(state, item) {
    return (state.yens += item.price * 100);
  }
};

var manageReducers = function(reducers) {
  return function(state, item) {
    console.log("state: ", state);
    console.log("item: ", item);

    return Object.keys(reducers).reduce(function(nextState, key) {
      reducers[key](state, item);
      //   console.log(state);

      return state;
    }, {});
  };
};

var bigTotalPriceReducer = manageReducers(reducers);
var initialState = { euros: 0, yens: 0 };
var items = [{ price: 10 }, { price: 120 }, { price: 1000 }];
var totals = items.reduce(bigTotalPriceReducer, initialState);
console.log(totals);
