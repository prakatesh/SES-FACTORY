const sagoModel=require('../../../model/sagoOrder')

exports.fetchsago=async(req,res)=>
{
    try{
        const data=await sagoModel.find({})
        console.log("find Request for sago")
        res.send({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
}