const app = require("http")
const fs = require("fs")

const server = app.createServer(function(req, res){
    if(req.url=="/"){
        res.write(fs.readFileSync(__dirname+"/home_5.html"))
    }
    else if(req.url=="/about"){
        res.write(fs.readFileSync(__dirname+"/about_5.html"))
    }
    else if(req.url=="/contact"){
        res.write(fs.readFileSync(__dirname+"/contact_5.html"))
    }
    res.end()
})

server.listen(4400, function(){
    console.log("Server Running On Port Number:"+4400);
})