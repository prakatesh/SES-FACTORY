const thappiModel=require('../../../model/thappiOrder')
exports.deleteThappi=async(req,res)=>
{
    try{
        const id=req.params.id
        const deldata=await thappiModel.findByIdAndDelete({_id:id})
        res.send({status:200})
    }
    catch(e)
    {
        console.log(e)
    }
}
