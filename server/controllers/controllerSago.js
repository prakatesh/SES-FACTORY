const sagoOrder=require('../model/sagoOrder')

exports.sago=async(req,res)=>
{
    const {name,email,number,Quantity,Purpose,comment}=req.body
    const data={
        name:name,
        email:email,
        number:number,
        Quantity:Quantity,
        Purpose:Purpose,
        comment:comment
    }

    try{
        sagoOrder.insertMany([data])
        res.json("done")
    }
    catch(e)
    {
        console.log(e)
    }
}