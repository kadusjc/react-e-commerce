import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

import AddToCartButton from '../components/AddToCartButton'

const ProductDetails = () => {
  const { productId } = useParams()
  console.log('PRODUCT ID '+ productId)
  let product = null
  const products = useSelector((state) => state.products.products)
  if (productId) product = products.find((p) => p.id.toString() === productId);
  
  if (!product) {
    return <div>Produto nao encontrado.</div>;
  }

  return (
    <div align="center">
      <h2>Detalhes do Produto Id {product.id}</h2>
      
      <Card className="card-medium card-details"  bg="red"> 
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>
            <Card.Link href={product.url} target='_blank'>{product.name}</Card.Link>
          </Card.Title>
          <Card.Text>Descrição: {product.description}</Card.Text>
          <Card.Text>Preço: ${product.price}</Card.Text>
          <AddToCartButton product={product}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
