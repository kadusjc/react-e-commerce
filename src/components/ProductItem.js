import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import '../styles/Card.css'
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ product }) => {
 
  return (
    <Card className="card-small" style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>Id: {product.id}</Card.Title>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to={`/produtos/${product.id}`}>
          <Button style={{margin: '2px'}} variant="primary">Detalhes</Button>
        </Link>
        <AddToCartButton product={product}/>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
