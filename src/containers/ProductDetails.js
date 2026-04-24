import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

import AddToCartButton from '../components/AddToCartButton'

const ProductDetails = () => {
  let product = null

  const { productId } = useParams()
  const products = useSelector((state) => state.products.products)
  if (productId) product = products.find((p) => p.id.toString() === productId);
  
  if (!product) {
    return <div>Produto nao encontrado.</div>;
  }

  return (
    <div align="center">
      <h2 className="page-title">Detalhes do Produto</h2>
      
      <Card className="card-medium card-details"> 
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>
            <Card.Link href={product.url} target='_blank'>{product.name}</Card.Link>
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <div className="product-detail-price">R$ {product.price}</div>
          <AddToCartButton product={product}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
