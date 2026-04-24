import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import '../styles/Card.css'
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ product }) => {
 
  return (
    <Card className="card-small">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <div className="product-price">R$ {product.price}</div>
        <Card.Text>{product.description}</Card.Text>
        <div className="card-actions">
          <Link to={`/produtos/${product.id}`}>
            <Button variant="primary">Detalhes</Button>
          </Link>
          <AddToCartButton product={product}/>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
