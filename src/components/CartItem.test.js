import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';

import CartItem from './CartItem';

const mockStore = configureMockStore([]);

describe('CartItem', () => {
  let store = mockStore({ cart: { cartItems: [] } })
  const mockProduct = { id: 1, name: 'Example Product', price: 10.99, qty: 2 };
  
  beforeEach(() => {
    store = mockStore({ cart: { cartItems: [] } })
  });

  it('should render the component correctly with message "Seu Carrinho está vazio"', () => {
    const { container } = render(<Provider store={store}><CartItem /></Provider>)
    expect(container.textContent).toBe('Seu carrinho está Vazio.')
  })

  it('should render the Cart Item with one item when code correctly when cartItems is not empty', () => {
    store = mockStore({ cart: { cartItems: [ mockProduct ] } })
    const { container } = render(<Provider store={store}><CartItem item={mockProduct} /></Provider>)
    expect(container.textContent).toBe('Nome Example Product - Preço $10.99 - Qtd 2   Remover ')
  })
});