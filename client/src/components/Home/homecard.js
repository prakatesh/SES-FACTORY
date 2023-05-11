import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Video from '../../assets/Video/video'
export default function Con2() {
  return (
    <Row className='con2' style={{padding:"1rem",backgroundColor:"white",boxShadow:"rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",borderRadius:"0.9rem"}}>
    
    <Col data-aos="fade-right" data-aos-duration="1000" md={6} style={{paddingLeft:"3rem"}}>
    <br></br>
    <h1 style={{fontWeight:"bolder",paddingLeft:"3rem"}}>Welcome to our Website</h1>
    <p style={{textAlign:"justify"}}>
    Located in Thalaivasal TK,<b>Sri Elumalaiyan Sago Factory</b> is a trusted entity in the industry instrumental in manufacturing and supplying premium quality sago seeds, 
    <b>tapioca starch</b>,etc.The offered range of products is completely free from any additives and other harmful preservatives making you assured that it is full of essential nutrients & flavor and rich in taste. We procure our products from reputed and reliable vendors in the market. All the products offered by us are hygienically processed using modern technology and hi-tech machines retaining their <b>freshness</b>, 
    <b>quality</b>,and <b>nutritional values</b>. 
    The company’s objective is to establish itself in all major markets across India and develop as a reputed manufacturer and supplier of authentic food products in the native.
    </p>
    </Col>
    <Col data-aos="fade-left" data-aos-duration="1000" style={{paddingTop:"1rem"}} md={6} sm={12}>
    <Video/>
    </Col>
    </Row>
  )
}
