
import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Dice from './components/Dice';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Ludo Game</h1>
      <Board />
      <Dice />
    </div>
  );
}

export default App;
