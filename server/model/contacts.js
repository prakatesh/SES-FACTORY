const mongoose=require('mongoose')
const newContact=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
})
const contacts=mongoose.model('contacts',newContact)

module.exports=contacts