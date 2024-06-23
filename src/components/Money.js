import React from 'react';
import '../css/Money.css';

const Money = ({ total, handleClick }) => {
  return (
    <div className="Money">
      <div className="button-container">
        <button className="round-button" onClick={() => handleClick(1)}>
          $1
        </button>
        <button className="round-button" onClick={() => handleClick(5)}>
          $5
        </button>
        <button className="round-button" onClick={() => handleClick(10)}>
          $10
        </button>
        <button className="round-button" onClick={() => handleClick(20)}>
          $20
        </button>
      </div>
    </div>
  );
};

export default Money;
