const signup=require('../model/signUp')

exports.Login=async(req,res)=>
{
    console.log(req.body)
    const {email,pass}=req.body

    // const data={
    //     email:email,
    //     pass:pass
    // }

        signup.find({name:"prakatesh"},(err,data)=>
        {
            if(err)
            {
                console.log("error")
            }
            else
            {
                console.log("data")
            }
        })
        res.send("done")
}