import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Navb from '../Navbar/navbar'
export default function Flipbook() {
  return (
    <div>
      <Navb/>
    <Row>
    <Col md={2}>
    </Col>
    <Col md={8}>
    <iframe width='100%' style={{marginTop:"30px"}} height='750vh' src="https://online.fliphtml5.com/rxird/eysj/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" title="myFrame" ></iframe>
  </Col>
    <Col md={2}>
    </Col>
    </Row>
    </div>
  )
}