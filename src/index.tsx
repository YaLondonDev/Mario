import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { initializeServiceWorkers } from './workbox';
import { axiosConfig } from './utils/axiosConfig';
import { store } from './store';
import './styles/default.scss';
import { App } from './App';

axiosConfig();

ReactDOM.hydrate(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root'),
);

initializeServiceWorkers();
