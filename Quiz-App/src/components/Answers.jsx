import { useRef } from "react";

export default function Answers({ answers, selAnswer, ansState,onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((a) => {
        const isSelected = selAnswer === a;
        let cssClass = "";
        if (ansState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if ((ansState === "correct" ||(ansState === "wrong") && isSelected)) {
          cssClass = ansState;
        }

        return (
          <li key={a} className="answer">
            <button onClick={() => onSelect(a)} className={cssClass} disabled={ansState !== ''}>
              {a}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
