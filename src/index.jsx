import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './App';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
      <ToastContainer />
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);
