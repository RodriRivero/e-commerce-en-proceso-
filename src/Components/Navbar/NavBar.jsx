
import './Navbar.css';
import { Navbar,Container,Nav } from "react-bootstrap";
import CarWidget from '../CarWidget/CarWidget';


function NavBar() {
    return( <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Rivero</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Hombre</Nav.Link>
      <Nav.Link href="#pricing">Mujer</Nav.Link>
      <Nav.Link href="#pricing">Niños</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href=""><CarWidget/></Nav.Link>
      <Nav.Link eventKey={2} href="">
        Ver mas..
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>);
    
    }

    export default NavBar;