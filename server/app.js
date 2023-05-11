const express=require('express')
const app=express()
const cors = require("cors")
const bodyParser = require('body-parser')
require('./connect')
const userRouter=require('./Router/userRouter')
const adminRouter=require('./Router/adminRouter')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/user',userRouter)
app.use('/admin',adminRouter)

app.listen(3000,()=>{
    console.log("port is listening to 3000")
})