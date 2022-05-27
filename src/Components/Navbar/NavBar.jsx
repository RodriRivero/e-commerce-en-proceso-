
import './Navbar.css';

import { Navbar,Container,Nav } from "react-bootstrap";


function NavBar() {
    return <>
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
      <Nav.Link href="#deets">Carrito</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Ver mas..
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<h1> e-commerce </h1>
    </>;
    
    }

    export default NavBar;