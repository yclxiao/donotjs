var test = require("tape")
var Node = require("../virtual-dom-node")
var version = require("../version")

test("Node is a function", function (assert) {
    assert.equal(typeof Node, "function")
    assert.end()
})

test("Node type and version are set", function (assert) {
    assert.equal(Node.prototype.type, "VirtualDOMNode")
    assert.deepEqual(Node.prototype.version, version.split("."))
    assert.end()
})