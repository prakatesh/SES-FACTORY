var express=require('express')
var app=express()
const collection=require('./connect')


app.post('/contact',async(req,res)=>{
    const data={
        name:name,
        email:email
    }
    const {name,email}=req.body
    try{
        await collection.insertMany([data])
        console.log("data is inserted")
        res.send("done")
    }  
    catch(e){
        console.log("data is not insert")
    }
})

app.listen(8000,()=>{
    console.log("port is listening to 8000")
})