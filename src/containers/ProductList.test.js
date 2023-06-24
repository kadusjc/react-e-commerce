import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import ProductList from './ProductList';

const mockStore = configureStore([]);

//Precisamos mocar Redux porque esse componente usa o ProductItem que usa redux
//Precisamos mocar BrowserRoute porque esse componente usa Links
//Precisamos mocar o store de users porque um componente de users é  (AddToCartButton) invocado na cadeia de chamadas

describe('ProductList', () => {
  let store = mockStore({ products: { products: [] } })
  const mockProducts = [
    { id: 1, name: 'Camisa 1', price: 110.99, qty: 2 },
    { id: 2, name: 'Camisa 2', price: 103.99, qty: 1 }
  ]

  beforeEach(() => {
    store = mockStore({ products: { products: [ ] }, user: { user: [] }  })
  });

  it('should render the ProductList empty when there are no products to display', () => {
    const wrapper = render(<Provider store={store}><ProductList /></Provider>)
    expect(wrapper.text()).toBe('Lista de Produtos')
  })

  it('should render the ProductList component correctly when there is one or more products', () => {
    store = mockStore({ products: { products: mockProducts }, user: { user: [] }  })
    const wrapper = render(<Provider store={store}><BrowserRouter><ProductList /></BrowserRouter></Provider>)
    expect(wrapper.text()).toBe('Lista de Produtos Id: 1 Camisa 1 Detalhes Id: 2 Camisa 2 Detalhes')
  })
});