import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Cart, FileLock2Fill, Gift, DoorClosed, PersonFill } from "react-bootstrap-icons";

import '../styles/NavBar.css'

const NavBar = ({ userData, quotation }) => {
  return (
    <Navbar bg="light" expand="lg" align="center">
      <Navbar.Brand as={Link} to="/">Loja React Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/"><DoorClosed/>&nbsp;Home&nbsp;</Nav.Link>
          <Nav.Link as={Link} to="/produtos"><Gift/>&nbsp;Produtos&nbsp;</Nav.Link>
          { userData && userData.name && <Nav.Link as={Link} to="/cart"><Cart/>&nbsp;Carrinho&nbsp;</Nav.Link> }
          <Nav.Link as={Link} to="/login"><PersonFill/>&nbsp;Login&nbsp;</Nav.Link>
          { userData && userData.name && <Nav.Link as={Link} to="/userProfile"><FileLock2Fill/>&nbsp;Perfil do Usuário &nbsp;</Nav.Link> }
        </Nav>
        <span className="currency"><strong>Dólar: </strong> R$ { quotation && quotation.USDBRL && quotation.USDBRL.high }  &nbsp; <strong>Euro:</strong> R$ { quotation && quotation.EURBRL && quotation.EURBRL.high }</span>
        &nbsp;&nbsp;&nbsp;  <strong>Livro Guia Definitivo para desenvolvedores Front-End</strong>
      </Navbar.Collapse>
      
    </Navbar>
    
  );
};

export default NavBar;
