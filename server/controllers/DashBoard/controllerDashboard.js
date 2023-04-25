const manageModel=require('../../model/manage')

exports.Purchase=async (req,res)=>
{
    const data=await manageModel.find({})
    // console.log(data)
    let Purchase=0,stock=0,totalAmount=0,saled=0,total=0
    for(i of data)
    {
        Purchase+=i.TodayPurchase,
        total+=i.Starch+i.Thappi,
        stock+=i.thappiStock+i.starchStock,
        totalAmount+=i.totalAmount
    }
    saled=total-stock
    res.json({status:200,data:[Purchase,total,saled,stock,totalAmount]})
}