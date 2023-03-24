import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import sag2 from "../components/sag2.jpg"
import newsag from "../components/newsag.jpg"
import './styles/con4.css'
export default function Con4() {
  return (
    <div>
    <br/>
    <Row>

    <Col md={3}>
    </Col>
    <Col md={4}>
    <Image className="d-block w-100" src={sag2} />
    </Col>
    <Col md={4}>
    <h3>Sago Seeds</h3>
    <p><b>Country of Origin: </b>India</p>
    <p><b>Type: </b>Sago Seeds</p>
    <p><b>Application: </b>Food,Gruel</p>
    <p><b>Color: </b>White</p>
    <p><b>Feature: </b>Best Quality,Gluten free,High Energy Booster</p><br></br>
    </Col>
    <Col md={2}>
    </Col>

    </Row>

    <Row>

    <Col md={3}>
    </Col>
    <Col md={4}>
    <Image className="d-block w-100" src={newsag} />
    </Col>
    <Col md={4}>
    <h3>Tapioca Starch</h3>
    <p><b>Country of Origin: </b>India</p>
    <p><b>Type: </b>Tapioca Starch</p>
    <p><b>Application: </b>Food Industry</p>
    <p><b>Cultivation Type: </b>Natural</p>
    <p><b>Color: </b>White</p><br></br>
    </Col>
    <Col md={2}>
    </Col>

    </Row>
    </div>
    
  )
}
