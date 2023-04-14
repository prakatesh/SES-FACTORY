const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Sample")
.then(()=>{
    console.log("Db connected successfully")
})
.catch((e)=>{
    console.log("Db connection is failed")
    console.log(e.message)
})