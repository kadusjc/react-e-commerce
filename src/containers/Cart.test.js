import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Cart from './Cart';

const mockStore = configureStore([]);

describe('Cart', () => {
  let store = mockStore({ cart: { cartItems: [] } })
  const mockProduct = { id: 1, name: 'Example Product', price: 10.99, qty: 2 };
  
  beforeEach(() => {
    store = mockStore({ cart: { cartItems: [ ] } })
  });

  it('should render the Cart component correctly with message "Seu Carrinho está vazio"', () => {
    const wrapper = render(<Provider store={store}><Cart /></Provider>)
    expect(wrapper.text()).toBe('Carrinho de Compras O carrinho está vazio.')
  })

  it('should render the Cart component Item correctly when cart has 1 or more items', () => {
    store = mockStore({ cart: { cartItems: [ mockProduct ] } })
    const wrapper = render(<Provider store={store}><Cart /></Provider>)
    expect(wrapper.text()).toContain('Carrinho de ComprasNome Example Product - Preço $10.99 - Qtd 2   Remover ')
  })
});