import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navb() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">SES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Nav className="d-flex">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="/"><span style={{color:"green"}}><i className="fa-solid fa-home" /></span>Home</Nav.Link>
            <Nav.Link href="/about"><span><i className="fa-solid fa-user" /></span>About</Nav.Link>
            <Nav.Link href="/flipbook"><span><i className="fa-solid fa-book" /></span>Flipbook</Nav.Link>
            <Nav.Link href="/product"><span><i className="fa-solid fa-box-open" /></span>Product</Nav.Link>
            <Nav.Link href="/contact"><span><i className="fa-solid fa-phone-volume"/></span>Contact us</Nav.Link>
            <Nav.Link href="/contact"><span><i className="fa-solid fa-lock" /></span>Admin</Nav.Link>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;