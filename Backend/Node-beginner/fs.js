const fs =require("fs")

// Asynchronous functions
fs.writeFile("message.html","<h1>Doing Great in learning Nodes JS.</h1>",(err)=>{
    if(err) throw err;
    console.log("hello")
    fs.readFile("message.html",'utf8',(err,data)=>{
        if (err) throw err;
        console.log(data)
    })

})


