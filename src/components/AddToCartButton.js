import React from 'react';
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addToCart } from '../redux/actions/cartActions';
import { CartPlusFill } from "react-bootstrap-icons";

const AddToCartButton = ({ product }) => {
  const userProfile = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart")
  };

  return (
    <>
    { userProfile && userProfile.name && 
      <Button style={{margin: '2px'}} variant="secondary" onClick={() => handleAddToCart(product)}>
        <CartPlusFill/>&nbsp;Adic. Carrinho
      </Button>
    }
    </>
  );
};

export default AddToCartButton;
