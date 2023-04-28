const SaleProduct=require('../model/productSale')


exports.removeStock=async(req,res)=>
{
    console.log(req.body)
    const {name,product,tons,amount,total,date}=req.body
    const data={
        name:name,
        product:product,
        tons:tons,
        amount:amount,
        total:total,
        date:date
    }

    try{
        SaleProduct.insertMany([data])
        res.json("done")
        console.log("Saled Product added successfully")
    }
    catch(e)
    {
        console.log(e)
    }
}