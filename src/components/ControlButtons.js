import React from 'react';
import '../css/ControlButtons.css';

const ControlButtons = ({ Clear, randomSelection, Cash }) => {
  return (
    <div className="control-buttons">
      <div className="button-row">
        <button className="control-button" onClick={Clear}>Clear</button>
        <button className="control-button" onClick={Cash}>Cash</button>
      </div>
      <div className="button-row">
        <button className="control-button" onClick={randomSelection}>Random Select</button>
      </div>
    </div>
  );
};

export default ControlButtons;
