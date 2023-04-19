
const manageModel =require('../../model/manage')


exports.manage=async(req,res)=>
{
    console.log(req.body);
    const {TodayPurchase,Bundle,PointRate,Starch,Thappi,Date,Expensive}=req.body
    const data={
        TodayPurchase:TodayPurchase,
        Bundle:Bundle,
        PointRate:PointRate,
        Starch:Starch,
        Thappi:Thappi,
        Expensive:Expensive,
        Date:Date
    }
    try{
        await manageModel.create([data])
        res.json("done")
        console.log("Admin data inserted for manage")
    }
    catch(e)
    {
        console.log(e)
    }
}