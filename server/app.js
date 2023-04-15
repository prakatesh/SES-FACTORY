const express=require('express')
const app=express()
const cors = require("cors")
const bodyParser = require('body-parser')
require('./connect')
const userRouter=require('./Router/userRouter')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/user',userRouter)


app.listen(8000,()=>{
    console.log("port is listening to 8000")
})