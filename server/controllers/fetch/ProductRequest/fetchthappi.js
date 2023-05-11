const thappiModel=require('../../../model/thappiOrder')

exports.fetchthappi=async(req,res)=>
{
    try{
        const data=await thappiModel.find({})
        res.send({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
}