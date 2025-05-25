import { board } from "../assets/GameData.js";
import { useState } from "react";
import "../index.css";

export default function GameBoard({ chngActivePlayer, activePlyrSymbol }) {
  const [gameBoard, setGameBoard] = useState(board);
  function handleSelectSquare(rowIdx, colIdx) {
    //updated values in an immutable way
    setGameBoard((prevState) => {
      const updatedBoard = [...prevState.map((e) => [...e])];
      updatedBoard[rowIdx][colIdx] = activePlyrSymbol;
      return updatedBoard;
    });

    chngActivePlayer();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => {
        return (
          <li key={rowIdx}>
            <ol>
              {row.map((col, colIdx) => {
                return (
                  <li key={colIdx}>
                    <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
