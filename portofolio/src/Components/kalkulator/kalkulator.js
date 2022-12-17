import React, { useState } from 'react';
import './scss/main.css'
import Kalkulator from './kalkulator/kalkulator';
import Navbar from '../navbar/navbar';

function Cal() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <Navbar />
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <main className="container-page">
          <Kalkulator />
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
    </div>
  );
}

export default Cal;