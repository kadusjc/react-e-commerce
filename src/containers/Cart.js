import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Cart;
