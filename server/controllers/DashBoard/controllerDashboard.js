const manageModel=require('../../model/manage')
const soldout=require('../../model/productSale')

exports.Purchase=async (req,res)=>
{
    const data=await manageModel.find({})
    const sold=await soldout.find({})

    let Purchase=0,Expense=0,totalCost=0
    let totalTons=0,totalSoldTons=0
    let totalAmount=0
    let totalSoldAmount=0,stock=0
    for(i of data)
    {
        Purchase+=i.TodayPurchase,
        Expense+=i.Expensive,
        totalTons+=i.Starch+i.Thappi,
        stock+=i.thappiStock+i.starchStock,
        totalAmount+=i.totalAmount
    }

    
    totalCost=Purchase+Expense
    for(j of sold){
        totalSoldTons=totalSoldTons+parseInt(j.tons),
        totalSoldAmount+=j.total
    }
    stock=stock-totalSoldTons
    saled=totalSoldTons

    totalAmount=totalSoldAmount-totalCost
    res.json({status:200,data:[Purchase,Expense,totalCost,totalTons,saled,stock,totalSoldAmount,totalAmount]})
}