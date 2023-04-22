const express=require('express')
const app=express()
const cors = require("cors")
const bodyParser = require('body-parser')
require('./connect')
const userRouter=require('./Router/userRouter')
const adminRouter=require('./Router/adminRouter')
const manageModel= require('./model/manage')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/sal',(req,res)=>{
//     var sum=0
//     manageModel.find({})

//     .then((data)=>{
//         for(i of data)
//         {
//             sum=sum+i.TodayPurchase
//         }
//         console.log(sum)
//         res.json({sum:sum})
//         // console.log(data) 
//     })
    

// })

app.use('/user',userRouter)
app.use('/admin',adminRouter)


app.listen(8000,()=>{
    console.log("port is listening to 8000")
})