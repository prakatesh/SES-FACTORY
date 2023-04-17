import React, { useEffect, useState } from 'react'
import FeedBackSide from './sideFeedback'
function FeedBack() {
    const [data,setdata]=useState([])
useEffect(()=>{
    fetch("http://localhost:8000/admin/view/feedback",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        // console.log(data.data)
        setdata(data.data)
    })
},[])
return (
    <div>
        <div>
            <FeedBackSide data={data}/>
        </div>
        
    </div>
)
}

export default FeedBack
