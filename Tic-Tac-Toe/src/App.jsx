import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Logs from "./components/Logs";
import { useState } from "react";
import { WINNING_COMB, board } from "./assets/GameData";

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

  let gameBoard = board;
  let winner;
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
    ) {
      winner = firstSymbol;
    }
  }

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
        {winner && <p>You Win {winner}</p>}
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
