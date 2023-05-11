const signup=require('../model/signUp')

exports.Login=async(req,res)=>
{
    const {email,password}=req.body

        try{
            const data=await signup.findOne({email:email})

            if(!data)
            {
                res.json("wrong Admin")
            }

            else if(data.password!==password)
            {
                res.json("wrong password")
            }
            else
            {
                res.json("correct Admin")
            }
        }
        catch(e){
            console.log(e)
        }
}