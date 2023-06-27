import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ProductDetails from './ProductDetails';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({ productId: '13' }),
}));

describe('ProductDetails', () => {
  let store = mockStore({ products: { products: [] } })
  const mockProduct = [{ id: '13', name: 'Example Product', price: 10.99, qty: 2 }, { id: '15', name: 'Other Product', price: 14.99, qty: 1 } ];
  
  beforeEach(() => {
    store = mockStore({ products: { products: []  }, user: { user: [] } } )
  });

  it('should render the ProductDetails component correctly with message "Produto nao encontrado"', () => {
    const { container } = render(<Provider store={store}><ProductDetails /></Provider>)
    expect(container.textContent).toBe('Produto nao encontrado.')
  })

  it('should render the ProductDetails component Item correctly displaying Product Details of product id = 13', () => {
    store = mockStore({ products: { products: mockProduct }, user: { user: [] }  })
    const { container } = render(<Provider store={store}><BrowserRouter><ProductDetails /></BrowserRouter></Provider>)
    expect(container.textContent).toContain('Detalhes do Produto Id 13Example ProductDescrição: Preço: $10.99')
  })

});