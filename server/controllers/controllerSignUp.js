const signUpModel=require('../model/signUp')


exports.signUp=async(req,res)=>
{
    console.log(req.body)
    const {name,email,password}=req.body
    const data={
        name:name,
        email:email,
        password:password
    }

    try{
        signUpModel.insertMany([data])
        res.json("done")
        console.log("data inserted for admin signup successfully")
    }
    catch(e)
    {
        console.log(e)
    }
}