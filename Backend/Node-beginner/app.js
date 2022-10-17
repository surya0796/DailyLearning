// Node
// In node each file and function lives only in that file.
// Each file is wrapped inside module wrapper by node.
// (function(export,require,module,__filename,__dirname){
//       Module code actually live inside this
// });

const { sayName, sayAddress} = require("./sayName")
const fileDetails = require("./path") 
const urls = require("./url") // this import makes the file run before app.js code executes
// const fs = require("./fs")
const http = require("./server")

// console.log("Extension",fileDetails.fileExt,"Location",fileDetails.fileLocation,"File Name",fileDetails.fileName);
// console.log("address of app file",__filename,__dirname);
// console.log("Url file",urls.newWayTOParseUrl,"Old Way",urls.parsedUrl);
// sayName()
// sayAddress()


