const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/sample")
.then(()=>{
    console.log("Db connected successfully")
})
.catch((e)=>{
    console.log("Db connection is failed")
    console.log(e.message)
})
const newschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})
const collection=mongoose.model('contact',newschema)

module.exports=collection