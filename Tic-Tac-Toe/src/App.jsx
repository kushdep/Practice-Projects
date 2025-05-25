import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Logs from "./components/Logs";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);
  function handleSelectSquare(rowIdx, colIdx) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
    setGameTurn((prevTurn) => {
      let currPlyr = "X";
      if (prevTurn.length > 0 && prevTurn[0].plyr === "X") {
        currPlyr = "O";
      }
      const updateTurn = [
        { square: { row: rowIdx, col: colIdx }, plyr: currPlyr },
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
        <GameBoard onSelectSquare={handleSelectSquare}
        turns={gameTurn} />
      </div>
      <Logs turns={gameTurn}/>
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
