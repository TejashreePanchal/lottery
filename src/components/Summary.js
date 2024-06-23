import React from 'react';
import '../css/Summary.css';

const Summary = ({ selectedNumbers, total }) => {
  const renderSelectedNumbers = () => {
    const elements = [];
    for (let i = 0; i < selectedNumbers.length; i++) {
      elements.push(
        <div key={i}> User Selected : {selectedNumbers[i]}</div>
      );
    }
    return elements;
  };

  return (
    <div className="summary">
      <h2>Numbers Selected:</h2>
      <div className="numbers-list">

      {renderSelectedNumbers()}

      {/*  {selectedNumbers.map((number, index) => (
          <div key={index}>User Selected : {number}</div>
        ))} */}


      </div>
      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

export default Summary;
