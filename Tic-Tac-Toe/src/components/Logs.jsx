export default function Logs({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.plyr} filled {turn.square.row} {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}
