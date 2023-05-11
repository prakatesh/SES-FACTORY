
const manageModel =require('../../model/manage')


exports.manage=async(req,res)=>
{
    const {TodayPurchase,Bundle,PointRate,Starch,Thappi,Date,Expensive}=req.body
    const data={
        TodayPurchase:TodayPurchase,
        Bundle:Bundle,
        PointRate:PointRate,
        Starch:Starch,
        Thappi:Thappi,
        Expensive:Expensive,
        Date:Date,
        starchStock:Starch,
        thappiStock:Thappi,
        totalAmount:0
    }
    try{
        await manageModel.create([data])
        res.json("done")
    }
    catch(e)
    {
        console.log(e)
    }
}