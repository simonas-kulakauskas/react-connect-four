import './GameBoard.css';
import { useState } from 'react';

function GameBoard() {
  const [gameBoard, setGameBoard] = useState([
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41],
  ]);

  const Row = ({ gameBoard }) => {
    return gameBoard.map((row, i) => {
      return (
        <div className="row" key={i}>
          <Cell row={row} />
        </div>
      );
    });
  };

  const Cell = ({ row }) => {
    return row.map((cell, j) => {
      return (
        <div className="cell" key={j}>
          {cell}
        </div>
      );
    });
  };

  return <Row gameBoard={gameBoard} />;
}

export default GameBoard;

/*
A Connect four gameboard is 7 columns, 6 rows.

|0|0|0|0|0|0|0|
|0|0|0|0|0|0|0|
|0|0|0|0|0|0|0|
|0|0|0|0|0|0|0|
|0|0|0|0|0|0|0|
|0|0|0|0|0|0|0|


So I can make a 2D array.
*/
