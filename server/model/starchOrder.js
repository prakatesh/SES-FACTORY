const mongoose=require('mongoose')
const newStarch=mongoose.Schema({
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

const starchOrder=mongoose.model('starchOrders',newStarch)

module.exports=starchOrder