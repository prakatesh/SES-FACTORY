import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Video from '../../assets/Viideo/video'
export default function Con2() {
  return (
    <Row className='con2'>
    <Col md={2}>
    </Col>
    <Col md={4}>
    <br></br>
    <h1>Welcome to our Website</h1>
    <p>
    Located in Thalaivasal TK (Tamil Nadu), New Bharathavel Sago Factory is a trusted entity in the industry instrumental in manufacturing and supplying premium quality sago seeds, 
    tapioca starch, etc. The offered range of products is completely free from any additives and other harmful preservatives making you assured that it is full of essential nutrients & 
    flavor and rich in taste. We procure our products from reputed and reliable vendors in the market. All the products offered by us are hygienically processed using modern technology and hi-tech machines retaining their freshness, 
    quality, and nutritional values. 
    The company’s objective is to establish itself in all major markets across India and develop as a reputed manufacturer and supplier of authentic food products in the native.
    </p>
    </Col>
    <Col md={6}>
    <br></br>
    <Video/>
    </Col>
    </Row>
  )
}
