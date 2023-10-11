const app = require("http")
const server = app.createServer(function(req, res){
    if(req.url=="/"){
        res.end("Welcome to Home Page!")
    }
    else if(req.url=="/student"){
        res.end("Welcome to Student Page!")
    }
    else if(req.url=="/faculty"){
        res.end("Welcome to Faculty Page!")
    }
})

server.listen(400, function(){
    console.log("Server Running On Port Number:"+400);
})