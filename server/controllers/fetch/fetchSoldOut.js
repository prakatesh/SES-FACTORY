const soldOutModel=require('../../model/productSale')

exports.fetchSoldOut=async(req,res)=>
{
    try{
        const data=await soldOutModel.find({})
        res.send({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
}