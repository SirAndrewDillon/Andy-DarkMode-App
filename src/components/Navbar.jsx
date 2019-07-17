import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';




const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>CRYPTO KEEPER</h1>
      <img src="https://i.redd.it/coxiekpjao101.png" alt="" style={{width: "69px", height: "69px"}} className="crypt"/>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
   
		






  
