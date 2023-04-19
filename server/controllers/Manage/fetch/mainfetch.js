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