import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="player 1" playerSymbol="X" />
          <Player playerName="player 2" playerSymbol="O" />
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App;
