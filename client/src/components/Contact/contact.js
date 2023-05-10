import React, { useState } from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import style from '../../assets/Styles/Contact/contact.module.css'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import EmailIcon from '@mui/icons-material/Email';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import Navb from '../Navbar/navbar'
import Footer from '../Footer/footer'
import { NavLink } from 'react-router-dom';
import info from '../../assets/Images/Contact/back.jpg'
import mail from '../../assets/Images/Contact/mail.jpg'
import { useNavigate } from 'react-router-dom';
export default function Contact() {
  const navigate=useNavigate()
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [state,setstate]=useState('None')
  const [city,setcity]=useState('')
  const [number,setnumber]=useState('')
  const [comment,setcomment]=useState('')
  
  async function submit(e){
    e.preventDefault();
    try{
      console.log(name,email,state,city,number,comment)
        const data = {name: name, email:email,state:state,city:city,number:number,comment:comment};
        console.log(data)
        await fetch("https://ses-uvx3.onrender.com/user/contact",{
          body : JSON.stringify(data),
          method : "POST",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        ).then((response) => response.json())
        .then((data) =>{
          console.log(data)
          if(data==="done")
        {
          console.log("object")
          navigate('/')
        }

        });
        
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <div className={style.b} >
      <Navb/>
    <div className={style.Contact}>
    <Container>
      <Row >
        <Col data-aos="fade-right"  data-aos-duration="1500" md={6}>
          <div style={{backgroundColor:"white"}}  className={style.card1} data-aos-duration="1500" >
            <h2>SRI ELUMALAIYAN SAGO FACTORY</h2>
            <hr/>
            <div className={style.info}>
              <div className={style.info1} >
                <ContactPhoneIcon style={{fontSize:"7vh"}}/>
                <h5>Contact Person</h5>
                <p >Mr. R Balakrishnan</p>
              </div>
              <hr/>
              <div className={style.info1} >
                <LocationOnIcon style={{fontSize:"7vh"}}/>
                <h5>Address</h5>
                <p >Sri Elumalaiyan Sago Factory, Attur, </p><p>Salem, Tamil Nadu, India - 636101</p>
              </div>
              <hr/>
              <div className={style.info1} >
                <RememberMeIcon style={{fontSize:"7vh"}}/>
                <h5>Call Us</h5>
                <p >+91-8610126966 </p>
              </div>
              <hr/>
              <div className={style.info2} >
                <EmailIcon style={{fontSize:"7vh"}}/>
                <h5>Email</h5>
                <NavLink>srielumalaiyansago@gmail.com</NavLink>
              </div>
              <hr/>
              <div className={style.info2} >
                <DesktopMacOutlinedIcon style={{fontSize:"7vh"}}/>
                <h5>Web Address</h5>
                <NavLink>www.srielumalaiyansago.co.in</NavLink>
              </div>
              <hr/>
            </div>
          </div>
        </Col>
        <Col data-aos="fade-left" data-aos-duration="1500" md={6}>
          <img src={info} alt="" />
        </Col>
      </Row>
      </Container>
      <hr/>
      <Container>
      <Row>
      <Col data-aos="fade-right" data-aos-duration="1500" md={6}>
          <img src={mail} alt="n" />
        </Col>
        <Col  data-aos="fade-left"data-aos-duration="1500" md={6} >
          <div style={{backgroundColor:"white"}} className={style.card2}  >
            <form>
              <label>Your Name</label><br/>
              <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder='Your Name'/><br/>
              <label>Email </label><br/>
              <input type="text" onChange={(e)=>{setemail(e.target.value)}} placeholder='Email'/><br/>
              <label for="State">Select State:</label><br/>
              <select onChange={(e)=>setstate(e.target.value)}id="State">
                <option onChange={(e)=>setstate(e.target.value)} selected value="None">None</option>
                <option onChange={(e)=>setstate(e.target.value)} value="Tamil Nadu">Tamil Nadu</option>
                <option onChange={(e)=>setstate(e.target.value)} value="Dehli">Dehli</option>
                <option onChange={(e)=>setstate(e.target.value)} value="kerala">kerala</option>
                <option value="Punjab">Punjab</option>
              </select><br/>
              <label>City </label><br/>
              <input onChange={(e)=>setcity(e.target.value)} type="text" placeholder='City '/><br/>
              <label>Phone / Mobile </label><br/>
              <input onChange={(e)=>setnumber(e.target.value)} type='number' placeholder='Phone / Mobile'/><br/>
              <label>Enquiry Detail</label><br/>
              <textarea onChange={(e)=>setcomment(e.target.value)} type="textarea" placeholder='Your Requirement' rows="4" cols="45"/><br/>
              <button className={style.button} onClick={submit} style={{verticalAlign:"middle"}}><span>Submit </span></button>
              <button className={style.button} style={{verticalAlign:"middle"}}><span>Cancel </span></button>
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
