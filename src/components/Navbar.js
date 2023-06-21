import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector((state) => state.user);
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">React Bootstrap Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Produts</Nav.Link>
          <Nav.Link as={Link} to="/cart">Carrinho</Nav.Link> 
          { user && user.name && <Nav.Link as={Link} to="/userProfile">Perfil do Usuário</Nav.Link> }
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
