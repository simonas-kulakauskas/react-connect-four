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

  return gameBoard.map((row, i) => {
    return (
      <div className="row" key={i}>
        {row.map((column, j) => {
          return (
            <div className="column" key={j}>
              {column}
            </div>
          );
        })}
      </div>
    );
  });
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
