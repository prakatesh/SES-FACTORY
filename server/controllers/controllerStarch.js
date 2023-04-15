const starchOrder=require('../model/starchOrder')

exports.starch=async(req,res)=>
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
        starchOrder.insertMany([data])
        res.json("done")
        console.log("data inserted for starch request")
    }
    catch(e)
    {
        console.log(e)
    }
}