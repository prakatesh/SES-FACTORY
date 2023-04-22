import React, { useEffect, useState } from 'react'
import Starchside from './Sagoside'
function SagoView() {
    const [data,setdata]=useState([])

    const getdata = async () => {
        await fetch("http://localhost:8000/admin/view/sago",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        // console.log(data.data)
        console.log(data)
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

export default SagoView
