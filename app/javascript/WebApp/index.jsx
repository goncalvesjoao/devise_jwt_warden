import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import routes from './routes';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  );
})
