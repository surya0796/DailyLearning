const express = require("express")
const app = express()
require("dotenv/config")
const mongoose = require("./database")
const bodyParser = require("body-parser")
const postRoute = require("./routes/posts")

app.use(bodyParser.json())
// app.use(express.json())
// app.use(express.urlencoded());

// Middlewares
app.use("/posts",postRoute)

// Routing
app.get("/",(req,res)=>{
    res.send("Helloo")
})

app.listen(8080)