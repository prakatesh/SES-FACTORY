import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Con2 from './homecard';
import Image from "react-bootstrap/Image";
import sago from "../components/newsag.jpg"
import Con3 from './Con3';
export default function Home() {
  return (
    <div className='main-content'>
    <Row>
    <Col>
    <Image className="imgsize" src={sago}/>
    </Col>
    </Row>

    <Row className='con1'>
    <Col>
    <Con2/>
    </Col>
    </Row>
    <br></br>

    <Row>
    <Col>
    <Con3/>
    </Col>
    </Row>

    </div>
  )
}
