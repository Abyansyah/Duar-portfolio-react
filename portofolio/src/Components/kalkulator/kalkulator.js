import React, { useState } from 'react';
import './scss/main.css'
import Kalkulator from './kalkulator/kalkulator';
import Navbar from '../navbar/navbar';

function Cal() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <Navbar />
        <main className="container-page">
          <Kalkulator className={darkMode ? 'dark-mode' : 'light-mode'}/>
          <main classname="kalkulator">
      
          </main>
        </main>
        <div className="container-check">
          <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>
        </div>
      </div>
  );
}

export default Cal;