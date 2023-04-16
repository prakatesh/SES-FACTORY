const signUpModel=require('../model/signUp')

exports.Login=(req,res)=>
{
    console.log(req.body)
    const {email,pass}=req.body

    // const data={
    //     email:email,
    //     pass:pass
    // }

    try{
        signUpModel.find({email:"prakatesh"},(err,data)=>{
            if(err)
            {
                console.log("error")
            }
            else
            {
                console.log(data)
            }
        })
        res.send("done")
    }
    catch(e){
        console.log(e.meesage)
    }
}