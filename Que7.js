const math = require('mathUtility_7');

const num1 = 10;
const num2 = 5;


const app = require("http")

const server = app.createServer(function(req, res){
    if(req.url=="/"){
        res.write(`Addition: ${math.add(num1, num2)}`);
        res.write(`\nSubtraction: ${math.subtract(num1, num2)}`);
        res.write(`\nMultiplication: ${math.multiply(num1, num2)}`);
        res.write(`\nDivision: ${math.divide(num1, num2)}`);

        res.end()
    }
    
})

server.listen(4200, function(){
    console.log("Server Running On Port Number:"+4200);
})