import React, { useEffect, useState } from 'react'
import Thappiside from './Thappiside'
function ThappiView() {
    const [data,setdata]=useState([])

    const getdata = async () =>{
        await   fetch("https://ses-uvx3.onrender.com/admin/view/thappi",{
            method:"get"
        }).then((res)=>res.json())
        .then((data)=>{
            // console.log(data.data)
            setdata(data.data)
        })
    }
useEffect(()=>{
  getdata()},[])

return (
    <div>

          <Thappiside data={data} getdata={getdata}/>
        
    </div>
)
}

export default ThappiView
