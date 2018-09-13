import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

function StateBoard({ value, add, sub }) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>
    </div>
  );
}

export default StateBoard;
