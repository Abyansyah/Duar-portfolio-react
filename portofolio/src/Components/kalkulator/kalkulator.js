import React, { useState } from 'react';
import './scss/main.css'
import Kalkulator from './kalkulator/kalkulator';
import Navbar from '../navbar/navbar';

function Cal() {

  return (
    <div >
      <Navbar />
      <Kalkulator/>
    </div>
  );
}

export default Cal;
