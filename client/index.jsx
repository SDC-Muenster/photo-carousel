import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

// const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

ReactDOM.hydrate(
  <App />,
  document.getElementById('more'),
  () => console.log('hydrating')
);
