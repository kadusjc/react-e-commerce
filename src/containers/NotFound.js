import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="notfound-wrapper">
      <h1>404</h1>
      <p className="notfound-subtitle">Página não encontrada</p>
      <p>O endereço que você digitou não existe ou foi removido.</p>
      <Link to="/" className="btn btn-primary">
        Voltar para Home
      </Link>
    </Container>
  );
};

export default NotFound;
