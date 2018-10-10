var test = require("tape")
var DataSet = require("data-set")

var render = require("../render")
var h = require("../h")
var diff = require("../diff")
var patch = require("../patch")

test("textnode update test", function (assert) {
    var hello = h("div", "hello")
    var goodbye = h("div", "goodbye")
    var rootNode = render(hello)
    var equalNode = render(goodbye)
    var patches = diff(hello, goodbye)
    var newRoot = patch(rootNode, patches)
    assertEqualDom(assert, newRoot, equalNode)
    assert.end()
})

test("textnode replace test", function (assert) {
    var hello = h("div", "hello")
    var goodbye = h("div", [h("span", "goodbye")])
    var rootNode = render(hello)
    var equalNode = render(goodbye)
    var patches = diff(hello, goodbye)
    var newRoot = patch(rootNode, patches)
    assertEqualDom(assert, newRoot, equalNode)
    assert.end()
})

test("textnode insert test", function (assert) {
    var hello = h("div", "hello")
    var again = h("span", ["hello", "again"])
    var rootNode = render(hello)
    var equalNode = render(again)
    var patches = diff(hello, again)
    var newRoot = patch(rootNode, patches)
    assertEqualDom(assert, newRoot, equalNode)
    assert.end()
})

test("textnode remove", function (assert) {
    var again = h("span", ["hello", "again"])
    var hello = h("div", "hello")
    var rootNode = render(again)
    var equalNode = render(hello)
    var patches = diff(again, hello)
    var newRoot = patch(rootNode, patches)
    assertEqualDom(assert, newRoot, equalNode)
    assert.end()
})

test("dom node update test", function (assert) {
    var hello = h("div.hello", "hello")
    var goodbye = h("div.goodbye", "goodbye")
    var rootNode = render(hello)
    var equalNode = render(goodbye)
    var patches = diff(hello, goodbye)
    var newRoot = patch(rootNode, patches)
    assertEqualDom(assert, newRoot, equalNode)
    assert.end()
})

test("dom node replace test", function (assert) {
    var hello = h("div", "hello")
    var goodbye = h("span", "goodbye")
    var rootNode = render(hello)
    var equalNode = render(goodbye)
    var patches = diff(hello, goodbye)
    var newRoot = patch(rootNode, patches)
    assertEqualDom(assert, newRoot, equalNode)
    assert.end()
})

test("dom node insert", function (assert) {
    var hello = h("div", [h("span", "hello")])
    var again = h("div", [h("span", "hello"), h("span", "again")])
    var rootNode = render(hello)
    var equalNode = render(again)
    var patches = diff(hello, again)
    var newRoot = patch(rootNode, patches)
    assertEqualDom(assert, newRoot, equalNode)
    assert.end()
})

test("dom node remove", function (assert) {
    var hello = h("div", [h("span", "hello")])
    var again = h("div", [h("span", "hello"), h("span", "again")])
    var rootNode = render(again)
    var equalNode = render(hello)
    var patches = diff(again, hello)
    var newRoot = patch(rootNode, patches)
    assertEqualDom(assert, newRoot, equalNode)
    assert.end()
})

function assertEqualDom(assert, a, b) {
    for (var key in a) {
        if (key !== "parentNode") {
            if (typeof a === "object") {
                assertEqualDom(assert, a[key], b[key])
            } else {
                assert.equal(a, b)
            }
        }
    }
}