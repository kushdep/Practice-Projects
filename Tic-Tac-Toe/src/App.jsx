import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSetActivePlayer() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
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
        <GameBoard
          chngActivePlayer={handleSetActivePlayer}
          activePlyrSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
