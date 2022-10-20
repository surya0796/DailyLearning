const express = require("express")
const mangoose = require("mongoose")
const app = express()

// Middlewares
app.use("/mariguana",()=>{
    console.log("it works")
})

// Routing
app.get("/",(req,res)=>{
    res.send("Helloo")
})

app.get("/mariguana",(req,res)=>{
    res.send("Let's smoke weed")
})

mangoose.connect("mongodb+srv://surya0796:Qazwsxed147258@cluster0.57mat1v.mongodb.net/?retryWrites=true&w=majority",()=>console.log("chl gya"))
// listening the server, basically a place (port) where this code will be executed on.
app.listen(4000)