const http = require("http")
// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.z

const fs = require("fs")
const path = require("path")

// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
// const server = http.createServer((req,res)=>{
//     console.log(req);
//     res.write('write there user')  //write a response to the client
//     res.end()   //end the response
// })
// The task of a web server is to open a file on the server and return the content to the client.
// server.listen(8080, ()=> console.log('server is up and running')) //the server object listens on port 8080

const server = http.createServer((req,res)=>{
// If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
    if(req.url === "/") {
        fs.readFile(path.join(__dirname,"index.html"), (err,data)=>{
            if(err) throw err
            res.writeHead(200,{ 'Content-type' : 'text/html' })
            res.write(data)
            res.end()
        })
    }
        else { 
            res.write("Page not found")
            res.end()
        }

})

server.listen(8080, () => console.log("server is running"))



