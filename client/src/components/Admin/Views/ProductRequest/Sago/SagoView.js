import React, { useEffect, useState } from 'react'
import Starchside from './Sagoside'
function SagoView() {
    const [data,setdata]=useState([])
useEffect(()=>{
    fetch("http://localhost:8000/admin/view/sago",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        // console.log(data.data)
        setdata(data.data)
    })
},[])
return (
    <div>

          <Starchside data={data}/>
        
    </div>
)
}

export default SagoView
