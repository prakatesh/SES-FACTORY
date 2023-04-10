import React from 'react'
import Navb from '../Navbar/navbar'
import style from '../../assets/Styles/Product/Productorder.module.css'
import img from '../../assets/Images/Products/sago.jpg'
import { Col, Row } from 'react-bootstrap'
function Productorder1() {
  return (
    <div>
      <Navb/>
        <div className={style.card}>
            <Row>
                <Col md={2}>
                </Col>
                <Col md={4}>
                    <img src={img} alt="k" />
                </Col>
                <Col md={6}>
                    <h4>Sago Seeds</h4>
                    <p>Price:<span>40.00-50.00/Kilogram</span></p>
                    <b>Only order request in TON</b>
                    <div>
                        <h6>Type <span>Sago Seeds</span></h6>
                        <h6>Application <span>Food, Gruel</span></h6>
                        <h3>Preferred Buyer From</h3>
                        <h6>Location <span>Anywhere in India</span></h6>
                        <form>
                            <label>Name</label>
                            <input type='text' placeholder='Name'/>
                            <label>Email</label>
                            <input type='text' placeholder='Email'/>
                            <label>Mobile No</label>
                            <input type='text' placeholder='Enter Phone number'/>
                            <label>Quantity<b>(Ton)</b></label>
                            <input type='text' placeholder='Estimated Quantity'/>
                            <label>Purpose of Requirement</label>
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                            <label for="html">Reselling</label><br/>
                            <input type="radio" id="css" name="fav_language" value="CSS"/>
                            <label for="css">Raw Material</label>
                            <label>Requirement Detail</label>
                            <textarea type='textarea'/>
                            <button>Send Enquiry</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Productorder1
