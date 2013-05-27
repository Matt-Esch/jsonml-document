# jsonml-document

[![build status][1]][2] [![dependency status][3]][4]

[![browser support][5]][6]

Produces a valid html5 document from JsonML

## Example

```js
var doc = require('jsonml-document')


var docString = doc(["html", [
    ["head", [
        ["meta", { charset: "utf-8" }],
        ["title", "Test document"],
        ["link", { rel: "stylesheet", href: "/css/main" }]
    ]],
    ["body", { class: "main" }, [
        ["p", "This is a test document"],
        ["script", { src: "/js/main" }]
    ]]
]])

/* docString:

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"></meta>
        <title>
            Test document
        </title>
        <link rel="stylesheet" href="/css/main"></link>
    </head>
    <body class="main">
        <p>
            This is a test document
        </p>
        <script src="/js/main"></script>
    </body>
</html>
*/

```

## Installation

`npm install jsonml-document`

## Contributors

 - Matt-Esch

## MIT Licenced

  [1]: https://secure.travis-ci.org/Matt-Esch/jsonml-document.png
  [2]: https://travis-ci.org/Matt-Esch/jsonml-document
  [3]: https://david-dm.org/Matt-Esch/jsonml-document.png
  [4]: https://david-dm.org/Matt-Esch/jsonml-document
  [5]: https://ci.testling.com/Matt-Esch/jsonml-document.png
  [6]: https://ci.testling.com/Matt-Esch/jsonml-document
