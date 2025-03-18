// import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';

function App() {
  return (
    <>
      <h1>Connect Four</h1>
      <h2>By Simonas Kulakauskas</h2>
      <div className="gameBoard">
        <GameBoard />
      </div>
    </>
  );
}

export default App;
