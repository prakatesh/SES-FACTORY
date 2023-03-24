import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Con1 from './con1';
import Con2 from './homecard';
import './styles/con4.css'
import Image from "react-bootstrap/Image";
import sago from "../components/newsag.jpg"
import Con3 from './Con3';
import Con4 from './Con4';
import Footer from './footer';
export default function Home() {
  return (
    <div className='main-content'>
    <Row>
    <Col>
    <Con1/>
    </Col>
    </Row>

    <Row className='con1'>
    <Col>
    <Con2/>
    </Col>
    </Row>

    <Row className="c3">
    <br/><h1 className='text-center'><br/>Glimpse of Our Company</h1>
    <Col>
    <br/><Con3/>
    <br/>
    </Col>
    </Row>
    <Row className="c4">
    <h1 className='text-center'><br/>Latest Products</h1>
    <Con4/>
    </Row>

    <Row>
    <Footer/>
    </Row>

    </div>
  )
}
