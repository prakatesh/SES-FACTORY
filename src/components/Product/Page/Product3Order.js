import React from 'react'
import Navb from '../../Navbar/navbar'
import style from '../../../assets/Styles/Product/Productorder.module.css'
import img from '../../../assets/Images/Products/wasteTapioca.jpg'
import Footer from '../../Footer/footer'
import { Col, Container, Row } from 'react-bootstrap'
function Product3Order() {
  return (
    <div>
    <Navb/>
    <div className={style.orderbody}>
        <Container className={style.card}>
            <Row>
                <Col md={6}>
                    <img src={img} alt="k" />
                </Col>
                <Col style={{paddingLeft:"7%",paddingTop:"1%"}} md={6}>
                    <h3>Thappi</h3>
                    <p style={{fontSize:"3vh"}}>Price:<span style={{fontWeight:"bolder"}}>3.00-3.50/Kilogram</span></p>
                    <b >Only order request in TON</b>
                    <div className={style.form}>
                        <h6 style={{marginLeft:"17vh",marginTop:"2%"}}>Type: <span>Waste(Thappi)</span></h6><hr/>
                        <h6 style={{marginLeft:"15vh"}} >Application: <span>Cow,Fish,Goat</span></h6><hr/>
                        <form>
                            <label>Name:</label>
                            <input style={{marginLeft:"9vh"}} type='text' placeholder='Name'/><br/>
                            <label>Email:</label>
                            <input style={{marginLeft:"10vh"}} type='text' placeholder='Email'/><br/>
                            <label>Mobile No:</label>
                            <input style={{marginLeft:"5vh"}} type='text' placeholder='Enter Phone number'/><br/>
                            <label>Quantity<b>(Ton)</b>:</label>
                            <input style={{marginLeft:"1vh"}} type='text' placeholder='Estimated Quantity'/><br/>
                            <label>Purpose:</label>
                            <select style={{height: "80%",width: "50%",marginLeft:"7vh"}} name="cars" id="cars">
                                <option value="Reselling">Reselling</option>
                                <option value="Raw-Material">Raw-Material</option>
                            </select><br/>
                            <label>Requirement Detail</label><br/>
                            <textarea type='textarea' cols="55"/><br/>
                            <button>Send Enquiry</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        <Footer/>
    </div>
  )
}

export default Product3Order
