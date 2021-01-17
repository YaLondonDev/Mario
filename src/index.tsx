import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { initializeServiceWorkers } from './workbox';
import { axiosConfig } from './utils/axiosConfig';
import { configureStore } from './store';
import './styles/default.scss';
import { App } from './App';

axiosConfig();

const store = configureStore(window.__INITIAL_STATE__);

declare global {
  interface Window {
    __INITIAL_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

ReactDOM.hydrate(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root'),
);

initializeServiceWorkers();
