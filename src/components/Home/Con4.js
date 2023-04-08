import React from 'react'
import {Row,Col} from 'react-bootstrap'
import sag2 from "../../assets/Images/Home/sag2.jpg"
import newsag from "../../assets/Images/Home/newsag.jpg"
import style from '../../assets/Styles/Home/con4.module.css'
export default function Con4() {
  return (
    <div>
    <br/>
    <Row className={style.con4} >
    <Col md={2}>
    </Col>
    <Col data-aos="fade-right" data-aos-duration="1000" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",margin:"1rem"}} md={4}>
    <img className="d-block w-100" alt="suma" src={sag2} />
    </Col>
    <Col data-aos="fade-left" data-aos-duration="1000" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",margin:"1rem"}} md={4}>
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
    <Row  className={style.con4}>
    <Col md={2}>
    </Col>
    <Col data-aos="fade-right" data-aos-duration="1500" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",margin:"1rem"}}  md={4}>
    <img className="d-block w-100" alt="suma" src={newsag} />
    </Col>
    <Col data-aos="fade-left" data-aos-duration="1500" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",margin:"1rem"}}  md={4}>
    <h3>Tapioca Starch</h3>
    <p><b>Country of Origin: </b>India</p>
    <p><b>Type:</b>Tapioca Starch</p>
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
