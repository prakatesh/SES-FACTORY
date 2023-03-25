import React from 'react'
import {Row,Col} from 'react-bootstrap'
import '../assets/Styles/Home/con4.css'
export default function Footer() {
  return (
   <div className='f'>  
   <br></br>  
   <Row>
    <Col md={2}>
    </Col>
    <Col md={3}>
    <h3>Quick Contact</h3>
    <p> New Bharathavel Sago Factory</p>
    <p> Mr. M. Ganesan</p>
    <p> New Bharathavel Sago Factory Sitheri Po, Attur, Salem, Tamil Nadu - 636101, India</p>
    <p>+91-9443327857</p>
    <p>NEWBHARATHAVELSAGO@GMAIL.COM
    </p>
    </Col>
    <Col md={1}>
    </Col>
    <Col md={2}>
    <h3>General Links</h3>
    <p>Home</p>
    <p>Products</p>
    <p>Contact Us</p>
    <p>About Us</p>
    <p>Testimonilas</p>
    <p>Site Map</p>
    </Col>

    <Col md={1}>
    </Col>

    <Col md={3}>
    <h3>Products</h3>
    <p>Sago Seeds</p>
    <p>Tapioca Starch</p>
    </Col>

    <Col md={2}>
    </Col>

    </Row>
    </div>

  )
}
