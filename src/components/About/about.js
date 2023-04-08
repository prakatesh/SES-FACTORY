import React from 'react'
import style from '../../assets/Styles/About/about.module.css'
import { Container,NavLink,Row,Col} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Navb from '../Navbar/navbar'
import Footer from '../Footer/footer'
export default function About() {
  return (
    <div>
      <Navb/>
    <div>
    <Container className={style.About} data-aos="fade-up" data-aos-duration="2000">
    <Row>
      <Col md={9}>
        <div className={style.p1}>
          <p>Located in Thalaivasal TK (Tamil Nadu), Sri Elumalaiyan Sago Factory is a trusted entity in the industry instrumental in manufacturing and supplying premium quality sago seeds, tapioca starch, etc. The offered range of products is completely free from any additives and other harmful preservatives making you assured that it is full of essential nutrients & flavor and rich in taste. We procure our products from reputed and reliable vendors in the market. All the products offered by us are hygienically processed using modern technology and hi-tech machines retaining their freshness, quality, and nutritional values. The company’s objective is to establish itself in all major markets across India and develop as a reputed manufacturer and supplier of authentic food products in the nation.</p>
          <h4>Our Team</h4>
          <p>To manage all the processes in the company efficiently, we have appointed a team of adept professionals who perform their tasks with utmost sincerity and professionalism. They hold expertise in their respective job roles and produce quality products that are good for health and rich in taste. Our testing experts stringently examine all of our products under several parameters to bring a flawless range to the market. With their support, we have been able to gain a sizable clientele base all across India.</p>
          <h4>Why Choose Us?</h4>
          <p>We adopt effective business strategies and provide premium-grade products to end-users at competitive prices. With our extensive proficiency in the business, we are able to meet the bulk demand of our clients and deliver the products within the specified time period.</p>
        </div>
      </Col>
      <Col md={3}>
        <div className={style.p2}>
          <div className={style.side1}>
          <LinkContainer to="product">
            <NavLink>
              Product
            </NavLink>
            </LinkContainer>
          </div>
          <div className={style.side2}>
          <LinkContainer to="product1">
            <NavLink style={{textDecoration:"none"}}>
              Starch
            </NavLink>
            </LinkContainer>
            <LinkContainer to="product2">
            <NavLink style={{textDecoration:"none"}}>
              Sago Seeds
            </NavLink>
            </LinkContainer>
          </div>
          <div className={style.contactus}>
          <LinkContainer to="contact">
            <NavLink>
              Contact US
            </NavLink>
            </LinkContainer>
            <div className={style.stylecontactus}>
              <h5>Sri Elumalaiyan Sago Factory</h5>
              <p>Attur, Salem, Tamil Nadu - 636101, India</p>
              <h4>Mobile :</h4>
              <p>+91-8610126966</p>
              <h4>E-mail :</h4>
              <span>srielumalaiyansago@gmail.com</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
    </div>
    <Container data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div className={style.table}>
          <table>
            <tr>
              <th>Name of CEO</th>
              <td>Balakrishnan</td>
            </tr>
            <tr>
              <th>Nature of Business</th>
              <td>Manufacturer & Supplier</td>
            </tr>
            <tr>
              <th>Number of Employees</th>
              <td>30</td>
            </tr>
            <tr>
              <th>Market Covered</th>
              <td>Pan India</td>
            </tr>
            <tr>
              <th>Year of Establishment</th>
              <td>2021</td>
            </tr>
            <tr>
              <th>GST No</th>
              <td>33AFCPA1100L1ZC</td>
            </tr>
          </table>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}
