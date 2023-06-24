import React from 'react';
import { render } from 'enzyme';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import UserProfile from './UserProfile';

const mockStore = configureStore([]);

describe('UserProfile', () => {
  const mockUser = { name: 'Carlos Eduardo Ferreiro Corrêa', email: 'kadusjc1984@gmail.com' };
  let store = mockStore({ user: { user: {} } })

  beforeEach(() => {
    store = mockStore({ user: { user: {} } })
  });  
  
  it('should render the component UserProfile without content case user is not logged yet', () => {
    const wrapper = render(<Provider store={store}><UserProfile /></Provider>)
    expect(wrapper.text()).toBe('Perfil do Usuário LogadoUsuário ainda não fez login.')
  })

  it('should render the component UserProfile displaying the user data', () => {
    store = mockStore({ user: { user: mockUser } })
    const wrapper = render(<Provider store={store}><UserProfile /></Provider>)
    expect(wrapper.text()).toBe('Perfil do Usuário Logado Nome Carlos Eduardo Ferreiro Corrêa E-mail kadusjc1984@gmail.com')
  })

  
});