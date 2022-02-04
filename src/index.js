import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lista from './components/Lista';
import Maps from './components/Maps/Maps'

ReactDOM.render(
  <React.StrictMode>
    <Lista/>
    <Maps/>
  </React.StrictMode>,
  document.getElementById('root')
);
