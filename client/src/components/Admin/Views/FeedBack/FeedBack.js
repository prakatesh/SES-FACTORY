import React, { useEffect, useState } from 'react'
import FeedBackSide from './sideFeedback'
function FeedBack() {
    const [data,setdata]=useState([])

    const getdata = async () =>{
        fetch("http://localhost:8000/admin/view/feedback",{
            method:"get"
        }).then((res)=>res.json())
        .then((data)=>{
            // console.log(data.data)
            setdata(data.data)
        })
    }
useEffect(()=>{
   getdata();
},[])
return (
    <div>
        <div>
            <FeedBackSide data={data} getdata={getdata}/>
        </div>
        
    </div>
)
}

export default FeedBack
