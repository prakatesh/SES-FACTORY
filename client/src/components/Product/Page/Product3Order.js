import React, { useState } from 'react'
import Navb from '../../Navbar/navbar'
import style from '../../../assets/Styles/Product/Productorder.module.css'
import img from '../../../assets/Images/Products/wasteTapioca.jpg'
import Footer from '../../Footer/footer'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Product3Order() {
    const navigate=useNavigate()
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [number,setnumber]=useState('')
    const [Quantity,setquantity]=useState('')
    const [Purpose,setpurpose]=useState('')
    const [comment,setcomment]=useState('')

    async function submit(e){
        e.preventDefault();
        console.log(name,email,number,Quantity,Purpose,comment)

        const data={
            name:name,
            email:email,
            number:number,
            Quantity:Quantity,
            Purpose:Purpose,
            comment:comment
        }

        await fetch('https://ses-uvx3.onrender.com/user/product/thappi',{
            body:JSON.stringify(data),
            method:"post",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            if(data==="done")
            {
                alert("The request is send to Admin successfully.Admin will contact as soon as possible")
                navigate('/')
            }
        })

        .catch((e)=>console.log(e))
    }
    return (
    <div>
    <Navb/>
    <div className={style.orderbody}>
        <Container className={style.card}>
            <Row>
                <Col md={6}>
                    <img src={img} alt="k" />
                </Col>
                <Col style={{paddingLeft:"7%",paddingTop:"1%"}} md={6}>
                    <h3>Thappi</h3>
                    <p style={{fontSize:"3vh"}}>Price:<span style={{fontWeight:"bolder"}}>3.00-3.50/Kilogram</span></p>
                    <b >Only order request in TON</b>
                    <div className={style.form}>
                        <h6 style={{marginLeft:"17vh",marginTop:"2%"}}>Type: <span>Waste(Thappi)</span></h6><hr/>
                        <h6 style={{marginLeft:"15vh"}} >Application: <span>Cow,Fish,Goat</span></h6><hr/>
                        <form>
                            <label>Name:</label>
                            <input onChange={(e)=>setname(e.target.value)}  style={{marginLeft:"9vh"}} type='text' placeholder='Name'/><br/>
                            <label>Email:</label>
                            <input onChange={(e)=>setemail(e.target.value)}  style={{marginLeft:"10vh"}} type='text' placeholder='Email'/><br/>
                            <label>Mobile No:</label>
                            <input  onChange={(e)=>setnumber(e.target.value)}  style={{marginLeft:"5vh"}} type='text' placeholder='Enter Phone number'/><br/>
                            <label>Quantity<b>(Ton)</b>:</label>
                            <input  onChange={(e)=>setquantity(e.target.value)}  style={{marginLeft:"1vh"}} type='text' placeholder='Estimated Quantity'/><br/>
                            <label>Purpose:</label>
                            <select onChange={(e)=>setpurpose(e.target.value)}  style={{height: "80%",width: "50%",marginLeft:"7vh"}} >
                                <option onChange={(e)=>setpurpose(e.target.value)}  value="None">None</option>
                                <option onChange={(e)=>setpurpose(e.target.value)}  value="Reselling">Reselling</option>
                                <option  onChange={(e)=>setpurpose(e.target.value)} value="Raw-Material">Raw-Material</option>
                            </select><br/>
                            <label>Requirement Detail</label><br/>
                            <textarea  onChange={(e)=>setcomment(e.target.value)}  type='textarea' cols="55"/><br/>
                            <button onClick={submit}>Send Enquiry</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        <Footer/>
    </div>
  )
}

export default Product3Order
