import React, { useEffect, useState } from 'react'
import Starchside from './Starchside'
function StarchView() {
    const [data,setdata]=useState([])

    const getdata = async () =>{
        await fetch("https://ses-uvx3.onrender.com/admin/view/starch",{
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

          <Starchside data={data} getdata={getdata}/>
        
    </div>
)
}

export default StarchView
