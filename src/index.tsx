import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { App } from './App';
import { axiosConfig } from './utils/axiosConfig';
import { store } from './store';
import { initializeServiceWorkers } from './workbox';
import './styles/default.scss';

axiosConfig();

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root'),
);

initializeServiceWorkers();
