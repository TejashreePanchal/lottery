import React from 'react';
import '../css/App.css'; // Ensure this file includes header styling if needed
import headerImage from '../images/1.jpg'

const Header = () => {
  return (
    <header className="header">
      <h1>WHE WHE on D'Avenue</h1>
      <img src={headerImage} alt="Header" className="header-image" />
    </header>
  );
};

export default Header;
