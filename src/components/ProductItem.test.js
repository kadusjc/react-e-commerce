import React from 'react';
import { render } from '@testing-library/react';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import ProductItem from './ProductItem';

const mockStore = configureStore([]);

//Precisamos mocar Redux porque esse componente usa o AddToCartButton que usa redux
//Precisamos mocar BrowserRoute porque esse componente usa Links
describe('ProductItem', () => {
  const mockProduct = { id: 10, name: 'Camisa GG - Chapolin', price: 109.99, qty: 2 };
  let store = mockStore({ cart: { cartItems: [] }, user: { user: {}} })

  beforeEach(() => {
    store = mockStore({ cart: { cartItems: [] }, user: { user: {}} })
  });  
  
  it('should render the component displaying product informations correctly with a detail link using Product Id ', () => {
    const { container } = render(<Provider store={store}><BrowserRouter><ProductItem product={mockProduct} /></BrowserRouter></Provider>)
    expect(container.textContent).toBe(' Id: 10 Camisa GG - Chapolin Detalhes')
  })

  
});