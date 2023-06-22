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
              <strong>Nome</strong> {item.name} - <strong>Preço</strong> ${item.price} - <strong>Qtd </strong>{item.qty} &nbsp;
              <Button variant="danger" style={{margin: '10px'}} onClick={() => handleRemoveFromCart(item.id)}>
                <CartX/>&nbsp;Remover&nbsp;
              </Button>
            </ListGroup.Item>
         </ListGroup>
      )}
    </div>
  );
};

export default CartItem;
