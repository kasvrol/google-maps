import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Waze from './components/Waze/Waze'
import Maps from './components/Maps/Maps'

ReactDOM.render(
  <React.StrictMode>
    <Waze/>
    <Maps/>
  </React.StrictMode>,
  document.getElementById('root')
);
