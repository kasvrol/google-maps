import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Waze from './components/Waze/Waze'
import Coordinate from './components/Coordinate/Coordinate'

ReactDOM.render(
  <React.StrictMode>
    <Waze/>
    <Coordinate/>
  </React.StrictMode>,
  document.getElementById('root')
);
