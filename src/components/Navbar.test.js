import React from 'react';
import { render } from '@testing-library/react';

import Navbar from './Navbar';
import { BrowserRouter } from "react-router-dom";

//Um vez que este componente usa Link, precisamos declara-lo debtro do BrowserRoute para testes
describe('NavBar ', () => {
  
  const mockUserProfile = { id: 1, name: 'Example Product', email: 'kadusjc1984@gmail.com'};
  const mockQuotation = { USDBRL: { high: 4.91 }, EURBRL: { high: 5.40 } };

  beforeEach(() => {
  });

  it('should NOT display "Cart" menu item neither "User Profile" until user does the login', () => {
    const { container } = render(<BrowserRouter><Navbar/></BrowserRouter>)
    expect(container.textContent).toBe('Loja React Bootstrap Home  Produtos  Login      Livro Guia Definitivo para desenvolvedores Front-End')
  })

  it('should display "Cart" menu item and "User Profile" when user is logged', () => {
    const { container } = render(<BrowserRouter><Navbar userData={mockUserProfile} quotation={mockQuotation} /></BrowserRouter>)
    expect(container.textContent).toBe('Loja React Bootstrap Home  Produtos  Carrinho  Login  Perfil do Usuário  Dólar:  R$ 4.91    Euro: R$ 5.4     Livro Guia Definitivo para desenvolvedores Front-End')
  })

});