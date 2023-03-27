import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from'../../assets/Styles/Navbar/navbar.module.css'
import {LinkContainer} from 'react-router-bootstrap'
function Navb() {
  const instyle=({isActive})=>{
    return(
      {
        fontSize:isActive?"100px":"10px"
      }
    )
  }
  return (
    <Navbar collapseOnSelect expand="lg" className={style.navb} variant="light">
      <Container>
        <Navbar.Brand className={style.title} href="#home"><b>Elumalaiyan Sago Factory</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer  to="/home">
            <Nav.Link  style={instyle} href="/home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link  to="/about">About us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link to="/product">Product</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/flipbook">
            <Nav.Link to="/flipbook">Flipbook</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
            <Nav.Link eventKey={2} to="/contact">Contact us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;