const express=require('express')
const app=express()
const cors = require("cors")
const bodyParser = require('body-parser')
require('./connect')
const userRouter=require('./Router/userRouter')
const {contact} =require('./controllers/contact')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/user',contact)

// app.post("/contact", (req,res) => {
//     console.log(req.body);
//     const {name,email,state,city,number,comment}=req.body
//     const data={
//         name:name,
//         email:email,
//         state:state,
//         city:city,
//         number:number,
//         comment:comment
//     }
//     try{
//         contacts.insertMany([data])
//         res.json("done")
//         console.log("data inserted")
//     }
//     catch(e)
//     {
//         console.log(e)
//     }
    
// })

app.listen(8000,()=>{
    console.log("port is listening to 8000")
})