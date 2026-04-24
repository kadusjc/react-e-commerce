import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Cart, Bag, Gift, House, PersonFill, PersonBadge } from "react-bootstrap-icons";

import '../styles/NavBar.css'

const NavBar = ({ userData, quotation }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" align="center">
      <Navbar.Brand as={Link} to="/"><Bag className="brand-icon"/>React Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/"><House/> Home</Nav.Link>
          <Nav.Link as={Link} to="/produtos"><Gift/> Produtos</Nav.Link>
          { userData && userData.name && <Nav.Link as={Link} to="/cart"><Cart/> Carrinho</Nav.Link> }
          <Nav.Link as={Link} to="/login"><PersonFill/> Login</Nav.Link>
          { userData && userData.name && <Nav.Link as={Link} to="/userProfile"><PersonBadge/> Perfil</Nav.Link> }
        </Nav>
        { quotation && <span className="currency">USD R$ { quotation && quotation.USDBRL && quotation.USDBRL.high } &nbsp;|&nbsp; EUR R$ { quotation && quotation.EURBRL && quotation.EURBRL.high }</span> }
        <span className="navbar-book-label">Livro React.js - Aprenda praticando</span>
      </Navbar.Collapse>
      
    </Navbar>
    
  );
};

export default NavBar;
