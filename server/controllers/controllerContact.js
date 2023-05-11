
const contactModel =require('../model/contacts')


exports.contact=async(req,res)=>
{
    console.log(req.body);
    const {name,email,state,city,number,comment}=req.body
    const data={
        name:name,
        email:email,
        state:state,
        city:city,
        number:number,
        comment:comment
    }
    try{
        contactModel.create([data])
        res.json("done")
    }
    catch(e)
    {
        console.log(e)
    }
}