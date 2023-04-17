const signup=require('../model/signUp')

exports.Login=async(req,res)=>
{
    console.log(req.body)
    const {email,password}=req.body

        try{
            const data=await signup.findOne({email:email})

            if(!data)
            {
                res.json("wrong Admin")
                console.log("wrong Admin")
            }

            else if(data.password!==password)
            {
                res.json("wrong password")
                console.log("wrong password")
            }
            else
            {
                res.json("correct Admin")
                console.log("correct Admin")
            }
        }
        catch(e){
            console.log(e)
        }
}