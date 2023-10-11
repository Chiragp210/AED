const express = require("express")
const fs = require("fs")
const app = express()

app.get("/", (req, res)=>{
    const data = fs.readFileSync("index_4.html")
    res.send(data.toString())
})

app.listen(4600,function(){
    console.log("running 4600");
})