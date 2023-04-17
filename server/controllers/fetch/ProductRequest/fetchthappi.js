const thappiModel=require('../../../model/thappiOrder')

exports.fetchthappi=async(req,res)=>
{
    try{
        const data=await thappiModel.find({})
        console.log("find Request for thappi")
        res.send({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
}