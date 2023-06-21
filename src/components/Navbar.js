import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css'

const NavBar = ({ userData }) => {
  console.log(' User '+ JSON.stringify(userData, null,))
  return (
    <Navbar bg="light" expand="lg" align="center">
      <Navbar.Brand as={Link} to="/">Loja React Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
          <Nav.Link as={Link} to="/cart">Carrinho</Nav.Link> 
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          { userData && userData.name && <Nav.Link as={Link} to="/userProfile">Perfil do Usuário</Nav.Link> }
        </Nav>
        &nbsp;&nbsp;&nbsp;Livro Guia Definitivo para desenvolvedores Front-End
      </Navbar.Collapse>
      
    </Navbar>
    
  );
};

export default NavBar;
