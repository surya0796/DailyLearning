const path = require("path")
const fileLocation = path.join(__dirname,'anystring.txt') //second args is to specify the file name
const fileName = path.basename(fileLocation)
const fileExt = path.extname(fileName)
console.log("this file runs first");

module.exports = {fileLocation,fileName,fileExt}