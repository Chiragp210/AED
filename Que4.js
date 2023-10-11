const app = require("http")
const fs = require("fs")

const server = app.createServer(function(req, res){
    if(req.url=="/"){
        res.write(fs.readFileSync(__dirname+"/index_4.html"))
    }
    res.end()
})

server.listen(4300, function(){
    console.log("Server Running On Port Number:"+4300);
})