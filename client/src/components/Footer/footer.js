import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "../../assets/Styles/Home/con4.module.css";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className={style.f}>
      <Row className="justify-content-center p-3">
        <Col md={3}>
          <h3>Quick Contact</h3>
          <p>Sri Elumalaiyan Sago Factory</p>
          <p> Mr R Balakrishnan</p>
          <p>
            {" "}
            Sri Elumalaiyan Sago Factory, Attur, Salem, Tamil Nadu - 636101,
            India
          </p>
          <p>+91-8610126966</p>
          <p>srielumalaiyansago@gmail.com</p>
        </Col>
        <Col md={3}>
          <h3>General Links</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Products</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/flipbook">Flipbook</NavLink>
        </Col>

        <Col md={3}>
          <h3>Products</h3>
          <NavLink to="/product">Sago Seeds</NavLink>
          <NavLink to="/product"> Tapioca Starch</NavLink>
        </Col>
      </Row>
    </div>
  );
}
