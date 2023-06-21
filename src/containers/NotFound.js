import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="mt-4">
      <Alert variant="danger">
        <Alert.Heading>404 - Page Not Found</Alert.Heading>
        <p>The requested page does not exist.</p>
      </Alert>
    </Container>
  );
};

export default NotFound;
