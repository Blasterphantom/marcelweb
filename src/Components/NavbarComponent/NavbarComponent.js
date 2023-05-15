import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/MRLogo.png';

export default function NavbarComponent() {
  let navigate = useNavigate();

  return (
    <Navbar className='navBar' expand="lg">
    <Container>
      <Navbar.Brand>
        <img className='logo' src={logo} alt='my logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={ () => {navigate("/")}}>Home</Nav.Link>
          <Nav.Link onClick={ () => {navigate("About")}}>About</Nav.Link>
          <Nav.Link onClick={ () => {navigate("Contact")}}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
