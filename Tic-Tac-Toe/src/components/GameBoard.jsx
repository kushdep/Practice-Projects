import {board} from "../assets/GameData.js";
import '../index.css'

export default function GameBoard() {
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => {
        return <li key={rowIdx}>
          <ol>
            {row.map((col, colIdx) => {
              return <li key={colIdx}>
                <button>{col}</button>
              </li>;
            })}
          </ol>
        </li>; 
      })}
    </ol>
  );
}
