const contactModel=require('../../../server/model/contacts')
exports.deleteFeedback=async(req,res)=>
{
    try{
        const id=req.params.id
        const deldata=await contactModel.findByIdAndDelete({_id:id})
        res.send({status:200})
    }
    catch(e)
    {
        console.log(e)
    }
}
