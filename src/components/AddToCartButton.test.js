import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AddToCartButton from './AddToCartButton';

const mockStore = configureMockStore([]);
const mockProduct = { id: 1, name: 'Example Product', price: 10.99, qty: 2 };

describe('AddToCartButton', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ user: { user: {} } })
  });

  it('should NOT display the Add to Cart Button if user is NOT logged', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddToCartButton product={mockProduct} />
        </BrowserRouter>
      </Provider>
    );

    expect(container.textContent).toBe('');
  });

  it('should render the Add to Cart Button just if user is logged', () => {
    store = mockStore({ user: { user: { name: 'Carlos E. F Correa', email: 'kadusjc1984@gmail.com' } } });

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddToCartButton product={mockProduct} />
        </BrowserRouter>
      </Provider>
    );

    expect(container.textContent).toBe(' Adic. Carrinho');
  });

  it('should dispatch the "addToCart" action with the product when the button is clicked', () => {
    store = mockStore({ user: { user: { name: 'Carlos E. F Correa', email: 'kadusjc1984@gmail.com' } } });

    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddToCartButton product={mockProduct} />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(getByRole('button'));

    const expectedPayload = { payload: { ...mockProduct }, type: 'ADD_TO_CART' };
    expect(store.getActions()).toEqual([expectedPayload]);
  });
});
