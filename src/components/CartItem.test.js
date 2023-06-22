import React from 'react';
import { render } from '@testing-library/react';
import CartItem from './CartItem';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json"

describe('CartItem', () => {
  const mockProduct = {
    id: 1,
    name: 'Example Product',
    price: 10.99,
    quantity: 2,
  };

  it('should render the component correctly', () => {
      const app = shallow(<CartItem product={mockProduct} />)
      app.instance().setState({data: <li>teste</li>});
      app.instance().forceUpdate();
      expect(app.find('li')).toHaveLength(1)
    })
});