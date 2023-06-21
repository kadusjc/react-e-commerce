import React from 'react';
import { ListGroup, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

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
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              {item.name} - ${item.price}
              <Button variant="danger" style={{margin: '10px'}} onClick={() => handleRemoveFromCart(item.id)}>
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default CartItem;
