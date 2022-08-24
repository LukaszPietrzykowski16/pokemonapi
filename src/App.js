import React, {useEffect, useState} from 'react';
import './App.css';
import Pokemon from './pokemon.js';
import { Routes, Route, Link } from "react-router-dom";
import About from './About';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
 
}

export default App;
