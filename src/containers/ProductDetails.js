import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { addToCart } from '../redux/actions/cartActions';
import { CartPlusFill } from "react-bootstrap-icons";

const ProductDetails = () => {
  const { productId } = useParams()
  const userProfile = useSelector((state) => state.user.user);
  
  let product = null
  const products = useSelector((state) => state.products.products)
  if (productId) product = products.find((p) => p.id.toString() === productId);
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart")
  };

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
          { userProfile && userProfile.name && 
          <Button style={{margin: '2px'}} variant="secondary" onClick={() => handleAddToCart(product)}>
            <CartPlusFill/>&nbsp;Adic. Carrinho
          </Button>
        }
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
