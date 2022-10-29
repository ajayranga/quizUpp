import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
            <StyledLink to="/admin">Admin</StyledLink>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default NavBar;
