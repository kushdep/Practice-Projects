import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenger({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  console.log(timeRemaining)
 

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

   if(timeRemaining==0){
    handleStop()
  }

  return (
    <>
      <ResultModal
        reference={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        closeFun={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            ref={timer}
            onClick={timerIsActive ? handleStop : handleStart}
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="active">
          {timerIsActive ? "Timer is Running...." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
