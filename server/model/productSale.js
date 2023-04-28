const mongoose=require('mongoose')
const newSale=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    product:{
        type:String,
        require:true
    },
    tons:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    total:{
        type:Number,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})

const SaleProduct=mongoose.model('stockRemove',newSale)

module.exports=SaleProduct