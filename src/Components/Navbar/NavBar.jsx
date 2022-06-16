
import './Navbar.css';
import { Navbar,Container,Nav } from "react-bootstrap";
import CarWidget from '../CarWidget/CarWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return( <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">React-Rivero</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to= '/'> Bebidas </NavLink>
      <NavLink to= '/categoria/conalcohol'>con alcohol</NavLink>
      <NavLink to= '/categoria/sinalcohol'>sin alcohol</NavLink>
    </Nav>
    <Nav>
      <NavLink to='/cart'><CarWidget/></NavLink>
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