import { useState } from "react";
import QUESTIONS from "../question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers;
  shuffledAnswers.sort(() => Math.random() - 0.5);

  function handleSelectAnswer(selAnswer) {
    setUserAnswers((prev) => [...prev, selAnswer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((a) => (
            <li key={a} className="answer">
              <button onClick={() => handleSelectAnswer(a)}>{a}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
