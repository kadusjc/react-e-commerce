import React from 'react';
import { render } from 'enzyme';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import ProductDetails from './ProductDetails';

const mockStore = configureStore([]);

//Precisamos mocar Redux porque esse componente usa o AddToCartButton que usa redux
//Precisamos mocar BrowserRoute porque esse componente usa Links
describe('ProductItem', () => {
  const mockProduct = { id: 10, name: 'Camisa GG - Chapolin', price: 109.99, qty: 2 };
  let store = mockStore({ products: { products: [ mockProduct ] } })
  
  it('should render the component displaying "Produto nao encontrado" when there is no product ID comming into route params', () => {
    const wrapper = render(<Provider store={store}><BrowserRouter><ProductDetails/></BrowserRouter></Provider>)
    expect(wrapper.text()).toBe('Produto nao encontrado.')
  })

  /*it('should render the component displaying product informations correctly with a detail link using Product Id ', () => {*/

  
});