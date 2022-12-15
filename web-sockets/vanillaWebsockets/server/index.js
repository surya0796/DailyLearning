const Websockect =  require('ws')

const wss = new Websockect.Server({
    port:9876
},()=>console.log("Websocket is ready"))

wss.on("connection", function(ws){
    // ws.send("hello from the server")  // It sends message to the client.
    ws.on("message",(data)=>{
        
    })
})





// A tradional way of broadcasting message to all.
// client = []
// wss.on("connection", function(ws){
//      client.push(ws)
//     ws.on("message",(data)=>{
//         client.forEach((ws)=>ws.send(JSON.parse(data)))
//     })
// })