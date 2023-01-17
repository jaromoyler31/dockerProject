const express = require("express")
const hostname = require("os").hostname()
const app = express()

app.get("/", (req,res) =>{
    res.send("Mom Im Running My First Docker Container ID:" + hostname)
})  

app.listen(8080, ()=> {
    console.log("listening on port 8080")
})