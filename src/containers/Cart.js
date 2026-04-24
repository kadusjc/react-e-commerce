import React from 'react';
import { useSelector } from 'react-redux';
import { Cart as CartIcon } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  return (
    <div className="cart-container">
      <h1 className="page-title">Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <span className="cart-empty-icon"><CartIcon size={64}/></span>
          <p>Seu carrinho está vazio</p>
          <p>Explore nossos produtos e adicione itens!</p>
          <Link to="/produtos" className="btn btn-primary" style={{borderRadius: '50px', padding: '12px 32px', fontWeight: 700, marginTop: '20px', background: 'linear-gradient(135deg, #e94560, #d63851)', border: 'none'}}>Ver Produtos</Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          <div className="cart-summary">
            <div>
              <div className="cart-summary-label">Total de itens</div>
              <div className="cart-summary-items">{cartItems.reduce((acc, item) => acc + item.qty, 0)} {cartItems.reduce((acc, item) => acc + item.qty, 0) === 1 ? 'item' : 'itens'}</div>
            </div>
            <div style={{textAlign: 'right'}}>
              <div className="cart-summary-label">Total</div>
              <div className="cart-summary-value">R$ {cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0).toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
