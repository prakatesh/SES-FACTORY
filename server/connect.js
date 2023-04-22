const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://prakatesh2020:Kongu2022@cluster0.2taqg2c.mongodb.net/SES")
.then(()=>{
    console.log("Db connected successfully")
})
.catch((e)=>{
    console.log("Db connection is failed")
    console.log(e.message)
})