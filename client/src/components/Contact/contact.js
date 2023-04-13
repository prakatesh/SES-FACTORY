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
import axios from 'axios'
export default function Contact() {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  async function submit(e){
    console.log(name,email)
    e.preventDefault();
    try{
        // await axios.post("http://127.0.0.1:8000/",{
        await axios.post("http://localhost:8000/",{
          name,email
        })
        .then((res)=>{
          if(res.data==="done")
          {
            alert("successfully")
          }
        })
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
              <select id="State">
                <option selected value="None">None</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Dehli">Dehli</option>
                <option value="Goa">Goa</option>
                <option value="Punjab">Punjab</option>
              </select><br/>
              <label>City </label><br/>
              <input type="text" placeholder='City '/><br/>
              <label>Phone / Mobile </label><br/>
              <input type="text" placeholder='Phone / Mobile '/><br/>
              <label>City </label><br/>
              <input type="text" placeholder='City '/><br/>
              <label>Enquiry Detail</label><br/>
              <textarea type="textarea" placeholder='Your Requirement' rows="4" cols="45"/><br/>
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
