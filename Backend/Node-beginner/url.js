const url = require("url")

const address = "http://pristyncare.com/create-abha-health-id/"


const parsedUrl = url.parse(address,true)

const newWayTOParseUrl = new URL(address)

// console.log(parsedUrl,newWayTOParseUrl);
console.log("this file runs second");

module.exports = {parsedUrl,newWayTOParseUrl}