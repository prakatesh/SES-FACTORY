const starchModel=require('../../../model/starchOrder')
exports.deleteStarch=async(req,res)=>
{
    try{
        const id=req.params.id
        const deldata=await starchModel.findByIdAndDelete({_id:id})
        res.send({status:200})
    }
    catch(e)
    {
        console.log(e)
    }
}
