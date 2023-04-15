const sagoOrder=require('../model/sagoOrder')

exports.sago=async(req,res)=>
{
    console.log(req.body)
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
        console.log("data inserted for sago request")
    }
    catch(e)
    {
        console.log(e)
    }
}