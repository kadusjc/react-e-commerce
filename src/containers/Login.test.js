import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

import Login from './Login';

describe('Login', () => {
  it('should render the Login form content correctly', () => {
    const { container } = render(<Login />);
    expect(container.textContent).toBe('LoginUsernameE-mailPasswordLogin');
  });

  it('should call onLogin method into Login component when the button is clicked', () => {
    const mockLoginCall = sinon.spy();
    const { getByRole } = render(<Login onLogin={mockLoginCall} />);
    const loginButton = getByRole('button', { name: 'Login' });

    fireEvent.click(loginButton);

    expect(mockLoginCall.calledOnce).toBe(true);
  });
});
