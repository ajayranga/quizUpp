import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect bg="light" variant="light">
      <Container>
        <Navbar.Brand
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          Quiz Upp
        </Navbar.Brand>
        <Navbar id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/admin">Admin</Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default NavBar;
