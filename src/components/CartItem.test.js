import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import CartItem from './CartItem';
import { addToCart } from '../redux/actions/cartActions';

const mockStore = configureStore([]);

describe('CartItem', () => {
  let store = mockStore({ cart: { cartItems: [] } })
  const mockProduct = { id: 1, name: 'Example Product', price: 10.99, quantity: 2 };
  
  beforeEach(() => {
   store = mockStore({ cart: { cartItems: [] } })
   //store.dispatch(addToCart(mockProduct))
  });

  it('should render the component correctly with message "Seu Carrinho está vazio"', () => {
      const wrapper = shallow(<Provider store={store}><CartItem product={mockProduct} /></Provider>)
      expect(wrapper.html()).toBe('<div><p>Seu carrinho está Vazio.</p></div>')
    })
});