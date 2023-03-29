import React, { useEffect, useState } from 'react'
import {Row,Col } from 'react-bootstrap'
import Con1 from './con1';
import Con2 from '../Home/homecard';
import style from '../../assets/Styles/Home/con3.module.css'
import Con3 from '../Home/Con3';
import Con4 from '../Home/Con4';
import Footer from '../Footer/footer';
import Navb from '../Navbar/navbar';
import SyncLoader from "react-spinners/SyncLoader";
export default function Home() {
  const[Loading,setLoading]=useState(false)
  useEffect(()=>
  {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },30);
  },[])
  return (
    <div>
          {
      Loading?
      <SyncLoader style={{textAlign:"center",justifyContent:"center",display:"flex",alignItems:"center",paddingTop:"40vh"}}
        color={"rgb(118, 15, 215)"}
        loading={Loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div className='main-content'>
    <Navb/> 
    <Row>
    <Col>
    <Con1/>
    </Col>
    </Row>
    <Row className={style.con1}>
    <Col>
    <Con2/>
    </Col>
    </Row>

    <Row className={style.c3}>
    <br/><h1 className='text-center'><br/>Glimpse of Our Company</h1>
    <Col>
    <br/><Con3/>
    <br/>
    </Col>
    </Row>
    <Row className={style.c4}>
    <h1 className='text-center'><br/>Latest Products</h1>
    <Con4/>
    </Row>

    <Row>
    <Footer/>
    </Row>

    </div>
    }
    </div>
  )
}
