const mongoose=require('mongoose')
const manageModels=mongoose.Schema({
    TodayPurchase:{
        type:Number,
        require:true
    },
    Bundle:{
        type:Number,
        require:true
    },
    PointRate:{
        type:Number,
        require:true
    },
    Starch:{
        type:Number,
        require:true
    },
    Thappi:{
        type:Number,
        require:true
    },
    Expensive:{
        type:Number,
        require:true
    },
    Date:{
        type:String,
        require:true
    }
})

const manageModel=mongoose.model('manages',manageModels)

module.exports=manageModel