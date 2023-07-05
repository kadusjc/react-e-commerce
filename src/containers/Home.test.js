import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
 
  it('should render the Home page content correctly', () => {
    const { container } = render(<Home />)
    expect(container.textContent).toBe('Seja muito bem-vindo ao  React Bootstrap StoreEste é um exemplo bem simples de uma loja e-commerce construído com React, Redux e React Bootstrap.Sinta-se a vontade para explorar nossos produtos e adicioná-los no carrinho, aprecie sua experiência de compras.Faça o Login, com qualquer informação, para começar sua experiência')
  })
});