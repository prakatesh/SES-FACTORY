var express=require('express')
var app=express()
var cors = require("cors")
var bodyParser = require('body-parser')
const collection=require('./connect')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/", (req,res) => {
    console.log(req.body);
    const {name,email}=req.body
    const data={
        name:name,
        email:email
    }
    try{
        collection.insertMany([data])
        console.log("data inserted")
    }
    catch(e)
    {
        console.log(e)
    }
    
})

app.listen(8000,()=>{
    console.log("port is listening to 8000")
})