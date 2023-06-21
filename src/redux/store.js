import { Provider } from 'react-redux';
import allReducers from './reducers';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ 'reducer': allReducers });

store.subscribe(() =>
  console.log('store foi modificada', store.getState())
)

const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
