var jsonml = require("jsonml-stringify")

var doctypeString = "<!DOCTYPE html>"

module.exports = doctype

function doctype(json) {
    return doctypeString + "\n" + jsonml(json)
}