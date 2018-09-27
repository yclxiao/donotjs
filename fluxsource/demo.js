let Flux = {
  Action: function Action() {
    return {
      add: function(item) {
        window.dispatcher.dispatch({ type: "add", item: item });
      },
      remove: function(item) {
        window.dispatcher.dispatch({ type: "remove", item: item });
      }
    };
  },

  Dispatcher: function Dispatcher() {
    let _cid = 0; //callbackId
    let _callbacks = [];
    return {
      register: function(callback) {
        _callbacks[_cid] = callback;
        return _cid++;
      },
      unregister: function(_cid) {
        _callbacks.splice(_cid, _cid);
      },
      dispatch: function(payload) {
        _callbacks.forEach(callback => {
          callback(payload);
        });
      }
    };
  },

  Store: function Store() {
    let _itemList = window.initList;
    window.dispatcher.register(function(payload) {
      switch (payload.type) {
        case "add":
          _itemList.push(payload.item);
          break;
        case "remove":
          _itemList = _itemList.filter(item => item.id != payload.item.id)
          break;
        default:
          break;
      }
      window.reRender();
    });
    return {
      // 获取store中存放的itemList
      getList: function() {
        return _itemList;
      }
    };
  }
};

/* 页面代码 */

window.initList = [
  { id: 0, name: "洗衣" },
  { id: 1, name: "遛狗" },
  { id: 2, name: "做饭" }
];

window.reRender = function() {
  appEle = document.querySelector("#app");
  ulEle = document.querySelector("#list");

  let allEleArr = [];
  this.store.getList().forEach(item => {
    allEleArr.push(
      `<li>${item.name}  <span id="${item.id}" class="remove" onclick="remove(${
        item.id
      })">删除</span></li>`
    );
  });

  let allStr = allEleArr.join("");
  ulEle.innerHTML = allStr;
};

window.add = function(event) {
  let itemValue = document.querySelector("#thingInput").value;
  let currentList = this.store.getList();
  let lastId = currentList.length ? currentList[currentList.length - 1].id : 0;

  let item = {
    id: lastId + 1,
    name: itemValue
  };

  this.action.add(item);
};

window.remove = function(id) {
  let delItem = "";
  this.store.getList().forEach(item => {
    if (item.id == id) {
      delItem = item;
    }
  });

  this.action.remove(delItem);
};

window.dispatcher = new Flux.Dispatcher();
window.store = new Flux.Store();
window.action = new Flux.Action();

setTimeout(() => {
  // 待页面加载完毕后渲染页面
  window.reRender();
}, 0);
