import React from 'react';
import '../css/Numbers.css';

const Numbers = ({ selectedNumbers, handleClick }) => {
  // Create an array of numbers from 1 to 20 using a for loop
  const numbers = [];
  for (let i = 1; i <= 20; i++) {
    numbers.push(i);
  }

  const generateNumberElements = () => {
    const elements = [];
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      elements.push(
        <div
          key={number}
          className={`number ${selectedNumbers.includes(number) ? 'selected' : ''}`}
          onClick={() => handleClick(number)}
        >
          {number}
        </div>
      );
    }
    return elements;
  };

  return (
    <div>
      <div className="container">
        {generateNumberElements()}
      </div>
    </div>
  );
};

export default Numbers;
