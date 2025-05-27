import Player from "./components/Player.jsx";
import Timer from "./components/TimeChallenger.jsx";

function App() {

  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="EASY" targetTime={1} />
        <Timer title="NOT EASY" targetTime={5} />
        <Timer title="GETTING TOUGH" targetTime={10} />
        <Timer title="PROS ONLY" targetTime={15} />
      </div>
    </>
  );
}

export default App;
