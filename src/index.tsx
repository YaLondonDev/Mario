import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { initializeServiceWorkers } from './workbox';
import './styles/default.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

initializeServiceWorkers();
