const manageModel=require('../../../model/manage')

exports.fetchmanage=async(req,res)=>
{
    try{
        const managedata=await manageModel.find({})
        console.log("find Request for manage data")
        res.send({status:200,data:managedata})
    }
    catch(e)
    {
        console.log(e)
    }
}

exports.fetchedit=async(req,res)=>
{
    try{
        const {Date}=req.body
        const editdata=await manageModel.find({Date:Date})
        console.log("find Request for edit data")
        console.log(editdata)
        res.send({status:200,data:editdata})
    }
    catch(e)
    {
        console.log(e)
    }
}

exports.updatefetch=async(req,res)=>
{
    try{
        const {TodayPurchase,Bundle,PointRate,Starch,Thappi,Expensive,starchStock,thappiStock,totalAmount,Date}=req.body
        console.log(TodayPurchase,Bundle,PointRate,Starch,Thappi,Expensive,starchStock,thappiStock,totalAmount,Date)
        const updatedata=await manageModel.findOneAndUpdate({Date:Date},{
            TodayPurchase:TodayPurchase,
            Bundle:Bundle,
            PointRate:PointRate,
            Starch:Starch,
            Thappi:Thappi,
            Expensive:Expensive,
            starchStock:starchStock,
            thappiStock:thappiStock,
            totalAmount:totalAmount
        })
        console.log("update data")
        console.log(updatedata)
        res.send({status:200,data:updatedata})
    }
    catch(e)
    {
        console.log(e)
    }
}
