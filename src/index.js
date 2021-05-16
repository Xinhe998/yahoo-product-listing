import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/Index';
import GlobalStyles from '../styles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
);
