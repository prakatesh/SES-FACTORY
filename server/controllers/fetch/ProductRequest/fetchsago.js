const sagoModel=require('../../../model/sagoOrder')

exports.fetchsago=async(req,res)=>
{
    try{
        const data=await sagoModel.find({})
        res.send({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
}