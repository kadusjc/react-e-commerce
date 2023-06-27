import React from 'react';
import { render } from '@testing-library/react';

import NotFound from './NotFound';

describe('NotFound', () => {
 
  it('should render the NotFound page content correctly', () => {
    const { container } = render(<NotFound />)
    expect(container.textContent).toBe('404 - Rota não existenteO endereço requisitado não possui uma página correspondente.')
  })
});