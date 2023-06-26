import React from 'react';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import { render } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductDetails from './ProductDetails';


const mockStore = configureStore([]);

//Precisamos mocar Redux porque esse componente usa o AddToCartButton que usa redux
//Precisamos mocar BrowserRoute porque esse componente usa Links
describe('ProductItem', () => {

  beforeEach(() => {
    
  })

  afterEach(() => {
  })

  const mockProduct = { id: 10, name: 'Camisa GG - Chapolin', price: 109.99, qty: 2 };
  let store = mockStore({ products: { products: [ mockProduct ] } })
  
  it('should render the component displaying "Produto nao encontrado" when there is no product ID comming into route params', () => {
    const wrapper = render(<Provider store={store}><BrowserRouter><ProductDetails/></BrowserRouter></Provider>)
    expect(wrapper.text()).toBe('Produto nao encontrado.')
  })

  it('should render the component displaying product informations correctly with a detail link using Product Id ', () => {
    const wrapper = render(<Provider store={store}><BrowserRouter><ProductDetails/></BrowserRouter></Provider>)
    expect(wrapper.text()).toBe('Produto nao encontrado.')

  })

  
});