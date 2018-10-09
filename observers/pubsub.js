//发布订阅模式
let pubSub = {
  list: {},
  subscribe: function(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  unsubscribe: function(key) {
    delete this.list[key];
  },
  publish: function() {
    var args = arguments;
    let key = [].shift.call(args); //shift取出数组的第一个元素并返回，改变了原数组，非纯函数
    let fns = this.list[key];

    if (!fns || fns.length <= 0) {
      return false;
    }

    for (let i = 0; i < fns.length; i++) {
      const fn = fns[i];
      fn.apply(this, args);
    }
  }
};

pubSub.subscribe("name", function(...msg) {
  //用...msg接受所以参数
  console.log(...msg);
});
pubSub.subscribe("age", function(msg) {
  console.log(msg);
});

pubSub.publish("name", "infoname", "infoname2");
pubSub.publish("age", "infoage");
