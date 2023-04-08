import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Video from '../../assets/Video/video'
export default function Con2() {
  return (
    <Row className='con2' style={{paddingTop:"1vh"}}>
    <Col md={2}>
    </Col>
    <Col data-aos="fade-right" data-aos-duration="1000" md={4}>
    <br></br>
    <h1 style={{fontWeight:"bolder"}}>Welcome to our Website</h1>
    <p style={{textAlign:"justify"}}>
    Located in Thalaivasal TK (Tamil Nadu),<b>Sri Elumalaiyan Sago Factory</b> is a trusted entity in the industry instrumental in manufacturing and supplying premium quality sago seeds, 
    <b>tapioca starch</b>,etc.The offered range of products is completely free from any additives and other harmful preservatives making you assured that it is full of essential nutrients & flavor and rich in taste. We procure our products from reputed and reliable vendors in the market. All the products offered by us are hygienically processed using modern technology and hi-tech machines retaining their <b>freshness</b>, 
    <b>quality</b>,and <b>nutritional values</b>. 
    The company’s objective is to establish itself in all major markets across India and develop as a reputed manufacturer and supplier of authentic food products in the native.
    </p>
    </Col>
    <Col data-aos="fade-left" data-aos-duration="1000" style={{paddingTop:"3vh"}} md={6}>
    <Video/>
    </Col>
    </Row>
  )
}
