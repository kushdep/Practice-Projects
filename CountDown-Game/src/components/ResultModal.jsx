export default function ResultModal({
  targetTime,
  reference,
  remainingTime,
  closeFun,
}) {
  const formattedStopTime = (remainingTime / 1000).toFixed(2);
  const hasLost = remainingTime <= 0;
  const score = Math.round((1-remainingTime/(targetTime*1000))*100)

  return (
    <dialog ref={reference} className="result-modal">
      {hasLost && <h2>You Lost</h2>}
      {!hasLost && <h2>Your Score : {score}</h2>}
      <p>
        The Target time was <strong>{targetTime} </strong>seconds.
      </p>
      <p>
        You stopped the timer with
        <strong>{formattedStopTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={closeFun}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
