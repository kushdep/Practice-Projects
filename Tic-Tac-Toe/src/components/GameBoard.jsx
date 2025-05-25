import { board } from "../assets/GameData.js";
import "../index.css";

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard=board
  // for(let i=0;i<turns.length;i++){
  //   gameBoard[turns[i].square.row][turns[i].square.col]=turns[i].plyr;
  // }
  for(const turn of turns){
    const {square,plyr}=turn
    const {row,col}=square
    gameBoard[row][col]=plyr
  }
  console.log(gameBoard)

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => {
        return (
          <li key={rowIdx}>
            <ol>
              {row.map((col, colIdx) => {
                return (
                  <li key={colIdx}>
                    <button onClick={() => onSelectSquare(rowIdx, colIdx)}>
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

/*
We will not manage our game state in this component
  const [gameBoard, setGameBoard] = useState(board);
  function handleSelectSquare(rowIdx, colIdx) {
    //updated values in an immutable way

    setGameBoard((prevState) => {
      const updatedBoard = [...prevState.map((e) => [...e])];
      updatedBoard[rowIdx][colIdx] = activePlyrSymbol;
      return updatedBoard;
    });
    chngActivePlayer();
    onPlayerTurn(rowIdx, colIdx);
  }*/
