import { useRef, useState } from "react";

export default function TimeChallenger({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef();

  console.log("1 " + timer);

  function handleStart() {
    timer.current = setTimeout(() => {
      console.log("3 " + timer);
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button ref={timer} onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className="active">
        {timerStarted ? "Timer is Running...." : "Timer Inactive"}
      </p>
    </section>
  );
}
