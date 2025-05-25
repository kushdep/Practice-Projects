import "../index.css";

export default function GameBoard({ onSelectSquare, updatedGameBoard }) {
  return (
    <ol id="game-board">
      {updatedGameBoard.map((row, rowIdx) => {
        return (
          <li key={rowIdx}>
            <ol>
              {row.map((col, colIdx) => {
                return (
                  <li key={colIdx}>
                    <button
                      onClick={() => onSelectSquare(rowIdx, colIdx)}
                      disabled={col !== null}
                    >
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
// for(let i=0;i<turns.length;i++){
//   gameBoard[turns[i].square.row][turns[i].square.col]=turns[i].plyr;
// }
