# Virtual DOM and diffing algorithm

这是一篇关于React中**Virtual DOM**如何实现的好资料。里面包含了一些有意思的**idea**,隐藏在React框架里。

可以作为独立的模块实现**Virtual DOM**和**diff**算法。

## 动机

我们之所以不使用**Virtual DOM**, 是因为可以以表示当前应用程序状态的javascript函数编写模板，并根据当前应用状态返回对应的模板。

当我们这样做时，每次状态发生改变都会重新创建整个DOM,然后替换目标节点。对页面性能有很大的影响，也会打断用户的交互体验。

虚拟DOM方法允许每次状态改变时为视图重新创建虚拟DOM。在JavaScript中创建虚拟DOM相比DOM操作快很多。然后你可以使用60 帧每秒的批量处理当前的DOM的状态和新的Virtual DOM状态之间的差异。

**Virtual DOM**一个重要的部分是**它是一个模块**,并且**它只做好一件事情**。**Virtual DOM**只关心如何表现它自己。`diff`
  `batch` 和 `patch`函数是Virtual DOM的相关算法。

**Virtual DOM**与事件处理和应用状态无关。在示例里面可以使用`observ`处理应用状态，`dom-delegator`事件处理，也可以使用`jQuery`或`component/events`处理事件

## Example

**Warning:** Vaporware. The `virtual-dom` is not implemented yet.

```js
var h = require("virtual-dom/h")
var render = require("virtual-dom/render")
var raf = require("raf").polyfill
var Observ = require("observ")
var ObservArray = require("observ-array")
var computed = require("observ/computed")
var Delegator = require("dom-delegator")
var diff = require("virtual-dom-diff")
var patch require("virtual-dom-patch")
var batch = require("virtual-dom-batch")

// logic that takes state and renders your view.
function TodoList(items) {
    return h("ul", items.map(function (text) {
        return h("li", text)
    }))
}

function TodoApp(state) {
    return h("div", [
        h("h3", "TODO"),
        { render: TodoList, data: state.items },
        h("div", { "data-submit": "addTodo" }, [
            h("input", { value: state.text, name: "text" }),
            h("button", "Add # " + state.items.length + 1)
        ])
    ])
}

// model the state of your app
var state = {
    text: Observ(""),
    items: ObservArray([])
}

// react to inputs and change state
var delegator = Delegator(document.body)
delegator.on("addTodo", function (ev) {
    state.items.push(ev.currentValue.text)
    state.text.set("")
})

// render initial state
var currTree = TodoApp({ text: state.text(), items: state.items().value })
var elem = render(currTree)

document.body.appendChild(elem)

// when state changes diff the state
var diffQueue = []
var applyUpdate = false
computed([state.text, state.items], function () {
    // only call `update()` in next tick.
    // this allows for multiple synchronous changes to the state
    // in the current tick without re-rendering the virtual DOM
    if (applyUpdate === false) {
        applyUpdate = true
        setImmediate(function () {
            update()
            applyUpdate = false
        })
    }
})

function update() {
    var newTree = TodoApp({ text: state.text(), items: state.items().value })

    // calculate the diff from currTree to newTree
    var patches = diff(currTree, newTree)
    diffQueue = diffQueue.concat(patches)
    currTree = newTree
}

// at 60 fps, batch all the patches and then apply them
raf(function renderDOM() {
    var patches = batch(diffQueue)
    elem = patch(elem, patches)

    raf(renderDOM)
})
```

## Documentation

### `var virtualDOM = h(tagName, props?, children?)`

`h` creates a virtual DOM tree. You can give it a `tagName` and
  optionally DOM properties & optionally an array of children.

### `var elem = render(virtualDOM)`

`render` takes a virtual DOM tree and turns it into a DOM element
  that you can put in your DOM. Use this to render the initial
  tree.

### `var patches = diff(previousTree, currentTree)`

`diff` takes two virtual DOM tree and returns an array of virtual
  DOM patches that you would have to apply to the `previousTree`
  to create the `currentTree`

This function is used to determine what has changed in the
  virtual DOM tree so that we can later apply a minimal set of
  patches to the real DOM, since touching the real DOM is slow.

### `var patches = batch(patches)`

`batch` can be used to take a large array of patches, generally
  more then what is returned by a single `diff` call and will
  then use a set of global heuristics to produce a smaller more
  optimal set of patches to apply to a DOM tree.

Generally you want to call `batch` 60 or 30 times per second to
  compute the optimal set of DOM mutations to apply. This is
  great if your application has large spikes of state changes
  that you want to condense into a smaller more optimal set of
  DOM mutations.

`batch` also does other useful things like re-ordering mutations
  to avoid reflows.

### `var elem = patch(elem, patches)`

`patch` will take a real DOM element and apply the DOM mutations
  in order. This is the only part that actually does the
  expensive work of mutating the DOM. In case that the root node
  needs to be replaced, the root is returned from the operation

We recommend you do this in a `requestAnimationFrame` handler.

## Concept

The goal is to represent your template as plain old javascript
  functions. Using actual `if` statements instead of
  `{{#if }} ... {{/if}}` and all other flow control build into
  javascript.

One approach that works very well is [hyperscript][2] however
  that will re-create a DOM node each time you re-render your
  view which is expensive.

A better solution is to have a `h` function that returns a
  virtual DOM tree. Creating a virtual DOM in JavaScript is
  cheap compared to manipulating the DOM directly.

Once we have two virtual DOM trees. One for the current application
  state and one for the previous we can use the `diff` function
  to produce a minimal set of patches from the previous virtual
  DOM to the current virtual DOM.

Once you have a set of patches, you could apply them immediately
  but it's better to queue them and flush this queue at a fixed
  interval like 60 times per second. Only doing our DOM
  manipulation with the callback to `requestAnimationFrame` will
  give us a performance boost and minimize the number of DOM
  operations we do. We also call `batch` in before we apply
  our patches to squash our list of diffs to the minimal set of
  operations.

Another important thing to note is that our virtual DOM tree
  contains a notion of a `Component` which is
  `{ render: function (data) { return tree }, data: { ... } }`.

This is an important part of making the virtual DOM fast. Calling
  `render()` is cheap because it only renders a single layer and
  embeds components for all it's child views. The `diff` engine
  then has the option to compare the `data` key of a component
  between the current and previous one, if the `data` hasn't
  changed then it doesn't have to re-render that component.

The `component` can also implement a `compare` function to
  compare the data between the previous and current to tell us
  whether or not the change requires a re-render.

This means you only have to re-render the components that have
  changed instead of re-rendering the entire virtual DOM tree
  any time a piece of application state changes.


  [1]: http://calendar.perfplanet.com/2013/diff/
  [2]: https://github.com/dominictarr/hyperscript
