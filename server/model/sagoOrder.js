const mongoose=require('mongoose')
const newSago=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    Quantity:{
        type:Number,
        require:true
    },
    Purpose:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
})

const sagoOrder=mongoose.model('sagoOrders',newSago)

module.exports=sagoOrder