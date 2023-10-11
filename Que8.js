const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
    if(req.url == '/getEmployeeData'){
        const content = fs.readFileSync('employee_8.json')
        res.end(content)
    }
    //Insert Employee Data
    if(req.url == '/addEmployee'){
        fs.readFileSync('employee_8.json',function(err,data){
            const newEmp = {
                EmpID : 200,
                EmpName : 'Pooja Sharma',
                salary : 50000
            }
            jsonData = JSON.parse(data) 
            jsonData.push(newEmp)
            var modifiedData = JSON.stringify(jsonData,null,2) //JSON object to JSON string
            fs.writeFileSync('employee_8.json',modifiedData,function(err){
                res.end("<h1> Data is added</h1>")
            })
        })
    }

    //update Employee Data
    if(req.url == '/update'){
        fs.readFileSync('employee_8.json',(err,data)=>{
            jsonData = JSON.parse(data)
            jsonData[1].salary = 48000
            var modifiedData = JSON.stringify(jsonData,null,2)
            fs.writeFile('employee_8.json',modifiedData,(err)=>{
                res.end("Salary of Employee ID : 101 is updated")
            })
        })
    }

    //delete Employee Data
    if(req.url.startsWith('/delete/')){
        var ID = req.url.split('/').pop()
        fs.readFile('employee_8.json',(err,data)=>{
            jsonData = JSON.parse(data)
            const index = jsonData.findIndex(e=>e.EmpID == ID.toString())
            jsonData.splice(index,1)
            var modifiedData = JSON.stringify(jsonData,null,2)
            fs.writeFile('employee_8.json',modifiedData,(err)=>{
                res.end("Data is deleted")
            })

        })
    }

    
}).listen(4500,function(){
    console.log('server is running on port 4500')
})