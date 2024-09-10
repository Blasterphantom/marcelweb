import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/MRLogo.png';
import Resume from '../../Assets/MarcelRodriguezResume.pdf';

export default function NavbarComponent() {
  let navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setExpanded(false);
  };

  return (
    <Navbar className='navBar' expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand onClick={() => handleNavigate("/")}>
          <img className='logo' src={logo} alt='my logo' />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("About")}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("Contact")}>Contact</Nav.Link>
            <Nav.Link className='resume' href={Resume} target='_blank'>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
