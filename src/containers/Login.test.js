import React from 'react';
import { Button } from 'react-bootstrap';
import { render, mount } from 'enzyme';
import sinon from 'sinon';

import Login from './Login';

describe('Login', () => {
  
  it('should render the Login form content correctly', () => {
    const wrapper = render(<Login />)
    expect(wrapper.text()).toBe('LoginUsernameE-mailPasswordLogin')
  })

  it('should call onLogin method into Login component when the button be clicked', () => {
    const mockLoginCall = sinon.spy()
    const wrapper = mount(<Login onLogin={mockLoginCall} />)
    const loginButton = wrapper.find(Button).at(0).simulate('submit')
    
    expect(loginButton.length).toBe(1);
    expect(mockLoginCall.callCount).toBe(1);
  })
});