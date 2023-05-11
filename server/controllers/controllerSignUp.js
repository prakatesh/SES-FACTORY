const signUpModel=require('../model/signUp')


exports.signUp=async(req,res)=>
{
    const {name,email,password}=req.body
    const data={
        name:name,
        email:email,
        password:password
    }

    try{
        signUpModel.insertMany([data])
        res.json("done")
    }
    catch(e)
    {
        console.log(e)
    }
}