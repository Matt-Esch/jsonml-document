var test = require("tape")

var doc = require("../index")
var stringify = require("jsonml-stringify")

test("jsonml-document is a function", function (assert) {
    assert.equal(typeof doc, "function")
    assert.end()
})

test("jsonml-document contains doctype", function (assert) {
    assert.equal(doc(""), "<!DOCTYPE html>\n")
    assert.end()
})

test("jsonml-document renders complex json", function (assert) {
    var test = ["html", [
        ["head", [
            ["title", "Test Page"]
        ]],
        ["body", [
            ["p", "A foo fooer for fooing foos"],
            ["span", "A bar barer for baring bars"]
        ]]
    ]]

    var rendered = stringify(test)

    assert.equal(doc(test), "<!DOCTYPE html>\n" + rendered)
    assert.end()
})
