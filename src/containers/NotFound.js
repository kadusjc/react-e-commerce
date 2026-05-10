import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="mt-4">
      <Alert variant="danger">
        <Alert.Heading>404 - Rota não existente</Alert.Heading>
        <p>O endereço requisitado não possui uma página correspondente.</p>
      </Alert>
    </Container>
  );
};

export default NotFound;
