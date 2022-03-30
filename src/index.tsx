import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BaseStyle } from './App/Styles';

ReactDOM.render(
  <React.StrictMode>
      <BaseStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);