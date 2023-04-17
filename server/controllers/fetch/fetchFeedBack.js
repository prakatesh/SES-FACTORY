const contactsModel=require('../../model/contacts')

exports.fetchFeedBack=async(req,res)=>
{
    try{
        const feedbackdata=await contactsModel.find({})
        console.log("find Request for FeedBack")
        res.send({status:200,data:feedbackdata})
    }
    catch(e)
    {
        console.log(e)
    }
}