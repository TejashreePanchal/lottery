import React, { useState } from "react";
import Header from "./Header";

import Numbers from "./Numbers";
import Money from "./Money";
import Summary from "./Summary";
import ControlButtons from "./ControlButtons";
import "../css/App.css";

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [total, setTotal] = useState(0);
  const [moneySelected, setMoneySelected] = useState(false);

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
      /* this will create a new array excluding the selected number

      const newSelectedNumbers = [];
      for (let i = 0; i < selectedNumbers.length; i++) {
      if (selectedNumbers[i] !== number) {
        newSelectedNumbers.push(selectedNumbers[i]);
      } 
    }
    // Update the state with the new array
    setSelectedNumbers(newSelectedNumbers); */

    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
      /* ... mean it will seperate the each number and add it in array */
    } else {
      alert("Sorry! You can only select the 5 Numbers")
    }
  };

  const handleMoneyClick = (amount) => {
    if (selectedNumbers.length < 5) {
      alert("Please select 5 numbers before selecting a money amount.");
      return;
    }
    setTotal(total + amount);
   // total(setTotal);
    setMoneySelected(true);
  };

  const Clear = () => {
    setSelectedNumbers([]);
    setTotal(0);
    setMoneySelected(false);
  };

  const randomSelection = () => {
    const newSelectedNumbers = [...selectedNumbers];
    
    // Generate random numbers until we have 5 selected numbers
    if(newSelectedNumbers.length<5){
    while (newSelectedNumbers.length < 5) {
      let randomNum = Math.floor(Math.random() * 20) + 1; // Generates a number between 1 and 20
      if (!newSelectedNumbers.includes(randomNum)) {
        newSelectedNumbers.push(randomNum);
      }
    }}else{
    
      alert("Five Numbers are already selected"); }
    

    setSelectedNumbers(newSelectedNumbers);
  };

  const Cash = () => {
    if (selectedNumbers.length < 5) {
      alert("Please select 5 numbers to proceed.");
      return;
    }
    if (!moneySelected) {
      alert("Please select a money amount first.");
      return;
    }
    
    alert("Congrations!!! YOU WON THE LOTTERY");
    setSelectedNumbers([]);
    setTotal(0);
    setMoneySelected(false);
  };


  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Numbers selectedNumbers={selectedNumbers} handleClick={handleNumberClick} />
        <div>
          <Money total={total} handleClick={handleMoneyClick} />
          <ControlButtons Clear={Clear} randomSelection={randomSelection} Cash={Cash}/>
        </div>
        <Summary selectedNumbers={selectedNumbers} total={total} />
      </div>
      
    </div>
  );
};

export default App;
