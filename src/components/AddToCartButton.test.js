import React from 'react';
import { render, mount } from 'enzyme';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import AddToCartButton from './AddToCartButton';

const mockStore = configureStore([]);

describe('AddToCartButton', () => {
  let store = mockStore({ cart: { cartItems: [] } })
  const mockProduct = { id: 1, name: 'Example Product', price: 10.99, qty: 2 };
  
  beforeEach(() => {
    store = mockStore({ user: { user: null } })
  });

  it('should NOT display the Add to the Cart Button if user is NOT logged', () => {
    const wrapper = render(<Provider store={store}><BrowserRouter><AddToCartButton product={mockProduct}/></BrowserRouter></Provider>)
    expect(wrapper.text()).toBe('')
  })

  it('should render the Add to the Cart Button just if user is logged', () => {
    store = mockStore({ user: { user: { name: 'Carlos E. F Correa', email: 'kadusjc1984@gmail.com'} } })
    const wrapper = render(<Provider store={store}><BrowserRouter><AddToCartButton product={mockProduct}/></BrowserRouter></Provider>)
    expect(wrapper.text()).toBe(' Adic. Carrinho')
  })
  
  it('should call Redux Action "addToCart", with Product, when the button is clicked', () => {
    store = mockStore({ user: { user: { name: 'Carlos E. F Correa', email: 'kadusjc1984@gmail.com'} } })
    const wrapper = mount(<Provider store={store}><BrowserRouter><AddToCartButton product={mockProduct}/></BrowserRouter></Provider>)
    wrapper.find('button').simulate('click')

    const expectedPayload = { payload: { ...mockProduct }, type: 'ADD_TO_CART'} 
    expect(store.getActions()).toEqual([expectedPayload])
  })
});