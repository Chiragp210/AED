const app = require("http")
//Que - 2
const server = app.createServer(function(req, res){
    if(req.url=="/"){
        res.end("Welcome to Node JS Application!")
    }
})



server.listen(3440, function(){
    console.log("Server Running On Port Number:"+3440);
})