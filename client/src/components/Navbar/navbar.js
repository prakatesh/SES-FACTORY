
import icon from '../../assets/Images/Icon/icon.png'


import React from 'react';
import {Collapse, Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:"rgb(47, 88, 117)"}}  light expand="md">
          <NavbarBrand to="/"><img style={{width:"50%"}} src={icon} alt="icon"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" style={{paddingLeft:"5vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-home" /></span>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" style={{paddingLeft:"5vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-user" /></span>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/flipbook" style={{paddingLeft:"5vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-book" /></span>Flipbook</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/product" style={{paddingLeft:"5vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-box-open" /></span>Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" style={{paddingLeft:"5vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-phone-volume"/></span>Contact us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/login" style={{paddingLeft:"5vh",color:"white",textDecoration:"none"}}><span style={{color:"white",paddingRight:"1vh"}}><i className="fa-solid fa-lock" /></span>Admin</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
