import React from 'react';
import { ListGroup, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { CartX } from "react-bootstrap-icons";

import '../styles/CartItem.css'

const CartItem = ({ item }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está Vazio.</p>
      ) : (
        <ListGroup>
            <ListGroup.Item className="listCard" key={item.id}>
              <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">R$ {item.price}</span>
                <span className="cart-item-detail">Qtd: {item.qty}</span>
              </div>
              <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>
                <CartX/>&nbsp;Remover
              </Button>
            </ListGroup.Item>
         </ListGroup>
      )}
    </div>
  );
};

export default CartItem;
