//观察者模式
function Subjects() {
  this.observers = [];
}
Subjects.prototype.add = function(observer) {
  this.observers.push(observer);
};
Subjects.prototype.remove = function(observer) {
  for (let i = 0; i < this.observers.length; i++) {
    const temp = this.observers[i];
    if (temp === observer) {
      this.observers.splice(i, 1);
    }
  }
};
Subjects.prototype.notify = function() {
  for (let i = 0; i < this.observers.length; i++) {
    const temp = this.observers[i];
    temp.update();
  }
};

function Observer(name) {
  this.name = name;
}
Object.prototype.update = function() {
  console.log("my name is : " + this.name);
};

var sub = new Subjects();
var obs1 = new Observer("111");
var obs2 = new Observer("222");

sub.add(obs1);
sub.add(obs2);
sub.notify();
sub.notify();
