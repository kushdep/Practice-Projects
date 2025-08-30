import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Logs from "./components/Logs";
import { useState } from "react";
import { WINNING_COMB, board } from "./assets/GameData";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].plyr === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...board.map((e) => [...e])];
  let win;
  for (const turn of gameTurn) {
    const { square, plyr } = turn;
    const { row, col } = square;
    gameBoard[row][col] = plyr;
  }
  console.log(gameBoard);

  for (const comb of WINNING_COMB) {
    const firstSymbol = gameBoard[comb[0].row][comb[0].column];
    const secondSymbol = gameBoard[comb[1].row][comb[1].column];
    const thirdSymbol = gameBoard[comb[2].row][comb[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ){
      win = firstSymbol;
    }
  }
  console.log(gameBoard.length)
  console.log(win)

  const hasDraw = gameTurn.length === 9 && !win;
  console.log(hasDraw)

  function handleSelectSquare(rowIdx, colIdx) {
    setGameTurn((prevTurn) => {
      let player = deriveActivePlayer(prevTurn);
      const updateTurn = [
        { square: { row: rowIdx, col: colIdx }, plyr: player },
        ...prevTurn,
      ];
      return updateTurn;
    });
  }

  function handleRematch() {
    setGameTurn([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            playerName="player 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(win || hasDraw) && (
          <GameOver winner={win} onRematch={handleRematch} />
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          updatedGameBoard={gameBoard}
        />
      </div>
      <Logs turns={gameTurn} />
    </main>
  );
}

export default App;

/*const [log, setLog] = useState({ r: -1, c: -1 });
  function handleSetLog(rowIdx, colIdx) {
    setLog((p) => {
      const updatedState = { ...p };
      updatedState.r = rowIdx;
      updatedState.c = colIdx;
      return updatedState;
    });
  }*/

/*
  ----deducted redundant state---
  const [activePlayer, setActivePlayer] = useState("X");
  setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
  );*/
