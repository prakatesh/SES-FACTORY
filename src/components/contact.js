import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import style from './styles/contact.module.css'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import EmailIcon from '@mui/icons-material/Email';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import { NavLink } from 'react-router-dom';
export default function Contact() {
  return (
    <div >
    <Container>
    <div className={style.Contact}>
      <Row>
        <Col md={6}>
        <Container>
          <div className={style.card1} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" >
            <h2>SRI ELUMALAIYAN SAGO FACTORY</h2>
            <hr/>
            <div className={style.info}>
              <div className={style.info1} >
                <ContactPhoneIcon style={{fontSize:"7vh"}}/>
                <h5>Contact Person</h5>
                <p >Mr. M. Ganesan</p>
              </div>
              <hr/>
              <div className={style.info1} >
                <LocationOnIcon style={{fontSize:"7vh"}}/>
                <h5>Address</h5>
                <p >New Bharathavel Sago Factory Sitheri Po, Attur, </p><p>Salem, Tamil Nadu, India - 636101</p>
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
          </Container>
        </Col>
        <Col md={6}>
          <div className={style.card2} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" >
            <form>
              <label>Your Name</label><br/>
              <input type="text" placeholder='Your Name'/><br/>
              <label>Email </label><br/>
              <input type="text" placeholder='Email '/><br/>
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
              <textarea type="textarea" placeholder='Your Requirement' rows="5" cols="55"/><br/>
              <button className={style.button} style={{verticalAlign:"middle"}}><span>Submit </span></button>
              <button className={style.button} style={{verticalAlign:"middle"}}><span>Cancel </span></button>
            </form>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  </div>
  )
}
