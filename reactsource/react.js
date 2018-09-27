(() => {
  let rootElement, rootReactElement;
  const REACT_CLASS = "REACT_CLASS";

  class Component {
    constructor(props) {
      this.props = props;
    }

    setState(state) {
      this.state = Object.assign({}, this.state, state);
      reRender();
    }
  }

  // React.createElement
  function createElement(parentEle, props, ...childEles) {
    if (
      typeof parentEle === "function" &&
      /^\s*class\s+/.test(parentEle.toString())
    ) {
      // （1）当为类组件时
      let component = new parentEle(props);
      component.type = REACT_CLASS;
      return component;
    } else if (typeof parentEle === "function") {
      // （2）当为函数组件时
      return parentEle(props);
    } else {
      // （3）当为html标签组件时
      let parentElement = document.createElement(parentEle);
      Object.keys(props || {}).forEach(key => {
        if (/^on.*$/.test(key)) {
          eventName = key.slice(2).toLowerCase();
          parentElement.addEventListener(eventName, props[key]);
        } else if (key === "className") {
          parentElement.setAttribute("class", props[key]);
        } else if (key === "style") {
          Object.keys(props[key]).forEach(
            attr => (parentElement.style[attr] = props[key][attr])
          );
        } else if (key === "ref") {
          props[key](parentElement);
        } else {
          // 添加其他如href等属性直接添加进来
          parentElement.setAttribute(key, props[key]);
        }
      });
      childEles.forEach(child => {
        if (typeof child === "string") {
          // (1)当子元素是一个字符时
          parentElement.innerHTML += child;
        } else if (Array.isArray(child)) {
          // (2)当子元素是一个数组中包含多个Node节点时
          child.forEach(childItem => parentElement.appendChild(childItem));
        } else if (
          child !== null &&
          typeof child === "object" &&
          child.type === "REACT_CLASS"
        ) {
          parentElement.appendChild(child.render());
        } else if (child !== null && typeof child === "object") {
          // (3)当子元素是一个Node节点是直接附加到父节点
          parentElement.appendChild(child);
        }
      });
      return parentElement;
    }
  }

  //渲染逻辑
  function render(insertEle, rootEle) {
    rootElement = rootEle;
    rootReactElement = insertEle;
    let currentEle =
      rootReactElement.type === "REACT_CLASS"
        ? rootReactElement.render()
        : rootReactElement;
    rootEle.appendChild(currentEle);
  }

  //重新渲染，此处可加入diff算法之类的
  function reRender() {
    //挨个儿将根节点下的子节点都移除掉，最后在重新走渲染逻辑
    while (rootElement.hasChildNodes()) {
      rootElement.removeChild(rootElement.lastChild);
    }
    ReactDom.render(rootReactElement, rootElement);
  }

  window.React = {
    createElement,
    Component
  };

  window.ReactDom = {
    render
  };
})();
