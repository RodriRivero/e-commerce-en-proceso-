
import './Navbar.css';
import { Navbar,Container,Nav } from "react-bootstrap";
import CarWidget from '../CarWidget/CarWidget';
import { NavLink } from 'react-router-dom';
import React from 'react';

function NavBar() {
    return( <>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">BarOnline</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to= '/'> <p className='bebidas'>Bebidas </p></NavLink>
      <NavLink  to= '/categoria/conalcohol'><p className='conalcohol'>con alcohol</p></NavLink>
      <NavLink to= '/categoria/sinalcohol'><p className='sinalcohol'>sin alcohol</p></NavLink>
    </Nav>
    <Nav>
      <NavLink to='/cart'> <p className='carrito'><CarWidget/></p></NavLink>
      <Nav.Link eventKey={2} href="">
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>);
    
    }

    export default NavBar;