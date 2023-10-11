const express  = require('express');
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.static(__dirname))
mongoose.connect("mongodb://127.0.0.1:27017/AWD")
const conn = mongoose.connection
conn.on('connected',()=>{
    console.log("MongoDB Conncted")
})
const customerSchema = mongoose.Schema({
    name: String,
    mobile: Number,
    address: String,
    type: String,
    height1: Number,
    height2: Number,
    width1: Number,
    width2: Number,
    cross1: Number,
    cross2: Number,
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/AddData.html')
})

const cus = mongoose.model('cus',customerSchema,'casestudy')
app.get('/api/getCustomerData',(req,res)=>{
cus.find().then((data)=>{
    res.json(data)
})
})

app.post('/api/addNewCustomer',(req,res)=>{
    cus.create({
        name : req.body.name,
        mobile: req.body.mobile,
        address:req.body.address,
        type: req.body.type,
        height1: req.body.height1,
        height2: req.body.height2,
        width1: req.body.width1,
        width2: req.body.width2,
        cross1: req.body.cross1 ,  
        cross2:  req.body.cross2
    }).then((newData)=>{
        res.json(newData)
    },(err)=>{
        res.json(err)
        console.log('Error')
    })
})

//delete

app.delete('/api/delete/:id', async(req,res)=>{
    let id = req.params.id
    cus.deleteOne({ _id: id }).then((data) => {
        res.json(data)
    })
})

//update

app.put('/api/update/:id', (req, res) => {
    let id = req.params.id
    let updateItemData = req.body
    cus.updateOne({ _id: id }, updateItemData).then((data) => {
        res.json(data)
    })
})

app.listen(82,()=>{
    console.log("Server Running on 82")
})