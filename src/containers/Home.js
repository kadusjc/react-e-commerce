import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Card bg="light" text="dark">
      <Card.Body>
        <Card.Title>Seja muito bem-vindo ao  React Bootstrap Store</Card.Title>
        <Card.Text>
          Este é um exemplo bem simples de uma loja e-commerce construído com React, Redux e React Bootstrap.
          <br/>Sinta-se a vontade para explorar nossos produtos e adicioná-los no carrinho, aprecie sua experiência de compras.
          <br/><br/>
          Faça o Login, com qualquer informação, para começar sua experiência
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Home;
