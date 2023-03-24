import Container from 'react-bootstrap/Container';
import {Form,Button} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
    <Navbar collapseOnSelect expand="lg" className="navb" variant="light">
      <Container>
        <Navbar.Brand className="title" href="#home"><b>Elumalaiyan Sago Factory</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link style={instyle} href="Home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
            <Nav.Link href="About">About us</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
            <LinkContainer to="product1">
              <NavDropdown.Item href="Product1">Product 1</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="product2">
            <NavDropdown.Item href="Product2">Product 2</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="product3">
          <NavDropdown.Item href="Product3">Product 3</NavDropdown.Item>
        </LinkContainer>
            </NavDropdown>
            <LinkContainer to="flipbook">
            <Nav.Link href="Flipbook">Flipbook</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
            <Nav.Link eventKey={2} href="Contact"> Contact us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success" >Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;