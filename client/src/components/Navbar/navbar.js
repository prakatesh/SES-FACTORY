import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../../assets/Images/Icon/icon.png'
import style from '../../assets/Styles/Navbar/navbar.module.css'
import { NavLink } from 'react-router-dom';
function Navb() {
  return (
    <Navbar className={style.navbar}  expand="lg">
      <Container fluid>
        <Nav.Link href='/'><img style={{width:"50%"}} src={icon} alt="icon"/></Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className={style.links} >
            <NavLink to="/"><span style={{color:"black",paddingRight:"1vh"}}><i className="fa-solid fa-home" /></span>Home</NavLink>
            <NavLink to="/about"><span style={{color:"black",paddingRight:"1vh"}}><i className="fa-solid fa-user" /></span>About</NavLink>
            <NavLink to="/flipbook"><span style={{color:"black",paddingRight:"1vh"}}><i className="fa-solid fa-book" /></span>Flipbook</NavLink>
            <NavLink to="/product"><span style={{color:"black",paddingRight:"1vh"}}><i className="fa-solid fa-box-open" /></span>Product</NavLink>
            <NavLink to="/contact"><span style={{color:"black",paddingRight:"1vh"}}><i className="fa-solid fa-phone-volume"/></span>Contact us</NavLink>
            <NavLink to="/login"><span style={{color:"black",paddingRight:"1vh"}}><i className="fa-solid fa-lock" /></span>Admin</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;