import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import ReduxProvider from './redux/store';
import App from './App';

ReactDOM.render(
  <ReduxProvider>
      <App />
  </ReduxProvider>,
  document.getElementById('root')
);
