import React from 'react';
import { render } from 'enzyme';

import NotFound from './NotFound';

describe('NotFound', () => {
 
  it('should render the NotFound page content correctly', () => {
    const wrapper = render(<NotFound />)
    expect(wrapper.text()).toBe('404 - Rota não existenteO endereço requisitado não possui uma página correspondente.')
  })
});