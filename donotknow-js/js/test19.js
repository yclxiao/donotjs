var duck = {
  duckSing: function() {
    console.log("嘎嘎嘎");
  }
};

var chichen = {
  duckSing: function() {
    console.log("嘎嘎嘎");
  }
};

var choid = [];

var joinChoid = function(animal) {
  if (animal && typeof animal.duckSing === "function") {
    choid.push(animal);
    console.log("恭喜加入合唱团");
    console.log(`合唱团已有的人员数量：${choid.length}`);
  }
};

joinChoid(duck);
joinChoid(chichen);
