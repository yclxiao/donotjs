function flatten(arr) {
    return [].concat.apply([], arr);
}

function h(tag, props, ...children) {
    return {
        tag, 
        props: props || {}, 
        children: flatten(children) || []
    };
}

function render(parent) {
    const vdom = view();
    
    const element = createElement(vdom);

    parent.appendChild(element);
}

function view() {
    return (
        <div>
            Hello World
            <ul>
                <li id="1" class="li-1">
                    第1
                </li>
            </ul>
        </div>
    );
}

// 创建dom元素
function createElement(vdom) {
    // 如果vdom是字符串或者数字类型，则创建文本节点，比如“Hello World”
    if (typeof vdom === 'string' || typeof vdom === 'number') {
        return doc.createTextNode(vdom);
    }

    const {tag, props, children} = vdom;

    // 1. 创建元素
    const element = doc.createElement(tag);

    // 2. 属性赋值
    setProps(element, props);

    // 3. 创建子元素
    children.map(createElement)
            .forEach(element.appendChild.bind(element));

    return element;
}

// 属性赋值
function setProps(element, props) {
    for (let key in props) {
        element.setAttribute(key, props[key]);
    }
}