const manageModel=require('../../model/manage')

exports.Purchase=async (req,res)=>
{
    const data=await manageModel.find({})
    // console.log(data)
    let Purchase=0,stock=0,totalAmount=0,sales=0
    for(i of data)
    {
        Purchase+=i.TodayPurchase,
        sales+=i.Starch,
        sales+=i.Thappi,
        stock+=i.thappiStock,
        stock=i.starchStock,
        totalAmount=i.totalAmount
    }
    res.json({status:200,data:[Purchase,sales,stock,totalAmount]})
}