import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import CartItem from './CartItem';

const mockStore = configureStore([]);

describe('CartItem', () => {
  let store = mockStore({ cart: { cartItems: [] } })
  const mockProduct = { id: 1, name: 'Example Product', price: 10.99, qty: 2 };
  
  beforeEach(() => {
   store = mockStore({ cart: { cartItems: [] } })
  });

  it('should render the component correctly with message "Seu Carrinho está vazio"', () => {
    const wrapper = shallow(<Provider store={store}><CartItem /></Provider>)
    expect(wrapper.html()).toBe('<div><p>Seu carrinho está Vazio.</p></div>')
  })

  it.skip('should render the Cart Item component HTML code correctly', () => {
    const wrapper = shallow(<Provider store={store}><CartItem item={mockProduct} /></Provider>)
    expect(wrapper.find('div').text()).toContain('text to check')
  })
});