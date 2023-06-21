import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const ProductDetails = ({ match }) => {
  const productId = match.params.id;
  const product = useSelector((state) => state.products.find((p) => p.id === productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <Card>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
