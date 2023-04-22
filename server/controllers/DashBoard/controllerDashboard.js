const manageModel=require('../../model/manage')

exports.Purchase=async (req,res)=>
{
    const data=await manageModel.find({})
    console.log(data)
    let Purchase=0,thappistock=0,starchStock=0
    for(i of data)
    {
        Purchase+=i.TodayPurchase,
        thappistock+=i.thappiStock,
        starchStock=i.starchStock
    }
    res.json({status:200,data:[Purchase,thappistock,starchStock]})
}