import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';


import { CartPlusFill } from "react-bootstrap-icons";
import '../styles/Card.css'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userProfile = useSelector((state) => state.user.user);
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart")
  };

  return (
    <Card className="card-small" style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>Id: {product.id}</Card.Title>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to={`/produtos/${product.id}`}>
          <Button style={{margin: '2px'}} variant="primary">Detalhes</Button>
        </Link>
        { userProfile && userProfile.name && 
          <Button style={{margin: '2px'}} variant="secondary" onClick={() => handleAddToCart(product)}>
            <CartPlusFill/>&nbsp;Adic. Carrinho
          </Button>
        }
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
