import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from '../../assets/Styles/Product/product.module.css'
import Footer from '../Footer/footer';
import { NavLink } from 'react-router-dom';
function ProductList({data}) {
  return (
    <div>
      <div className={style.header}>Our Product List</div>
      {data.map((data,index)=>
      {
        return(
          <div key={index} >
            {data.k==="0"?
            <Container>
            <div className={style.section} style={{backgroundColor:"white"}} data-aos="flip-right" data-aos-duration="2000">
              <Row>
                <Col md={6}>
                  <img src={data.pic} width="100%" alt="f" />
                </Col>
                <Col md={6}>
                  <div className={style.textsection}>
                    <h2>{data.topic}</h2>
                    <p>{data.p1}</p>
                    <p>{data.p2}</p>
                    <div className={style.button}>
                      <button  className={style.glow}><NavLink style={{ textDecoration: "none",color:"black"}}to={data.link}>Request Quote</NavLink></button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          :
          <Container>
          <div className={style.section}  style={{backgroundColor:"white"}} data-aos="flip-left" data-aos-duration="2000">
            <Row>
              <Col md={6}>
                <div className={style.textsection}>
                  <h2>{data.topic}</h2>
                  <p>{data.p1}</p>
                  <p>{data.p2}</p>
                  <div className={style.button}>
                    <button class={style.glow}><NavLink style={{ textDecoration: "none",color:"black"}}to={data.link}>Request Quote</NavLink></button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <img width="100%"src={data.pic} alt="f" />
              </Col>
            </Row>
          </div>
        </Container>
      }
          </div>
        )
      })}
      <Footer/>
    </div>
  )
}

export default ProductList
