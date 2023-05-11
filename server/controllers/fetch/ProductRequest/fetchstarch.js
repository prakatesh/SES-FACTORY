const starchModel=require('../../../model/starchOrder')

exports.fetchstarch=async(req,res)=>
{
    try{
        const feedbackdata=await starchModel.find({})
        res.send({status:200,data:feedbackdata})
    }
    catch(e)
    {
        console.log(e)
    }
}