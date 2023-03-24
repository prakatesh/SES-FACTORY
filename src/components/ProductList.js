import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from './styles/product.module.css'
function ProductList({data}) {
  return (
    <div>
      <div className={style.header}>Our Product List</div>
      {data.map((data,index)=>
      {
        return(
          <div key={index}>
            {data.k==="0"?
            <Container>
            <div className={style.section}>
              <Row>
                <Col md={5}>
                  <img src={data.pic} alt="f" />
                </Col>
                <Col md={7}>
                  <div className={style.textsection}>
                    <h2>{data.topic}</h2>
                    <p>{data.p1}</p>
                    <p>{data.p2}</p>
                    <div className={style.button}>
                      <button class={style.glow}>Request Quote</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          :
          <Container>
          <div className={style.section}>
            <Row>
              <Col md={7}>
                <div className={style.textsection}>
                  <h2>{data.topic}</h2>
                  <p>{data.p1}</p>
                  <p>{data.p2}</p>
                  <div className={style.button}>
                    <button class={style.glow}>Request Quote</button>
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <img src={data.pic} alt="f" />
              </Col>
            </Row>
          </div>
        </Container>
      }
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
