import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <button onClick={handleRemoveFromCart}>Remover do carrinho</button>
    </div>
  );
};

export default CartItem;
