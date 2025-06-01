import { useCallback, useState } from "react";
import QUESTIONS from "../question";
import ProgressBar from "./ProgressBar";
import quizOverImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  let isQuizOver = activeQuestionIndex === QUESTIONS.length;
  console.log("isQuizOver" + activeQuestionIndex);
  console.log("isQuizOver" + isQuizOver);

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selAnswer) {
    setUserAnswers((prev) => [...prev, selAnswer]);
  },[]);

  const handleSkipAns = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

  if (isQuizOver) {
    console.log("OVER");
    return (
      <div id="summary">
        <img src={quizOverImg} alt="trophy" />
        <h2>QUIZ OVER</h2>
      </div>
    );
  }

  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers;
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar key={activeQuestionIndex} timeOut={10000} onTimeOut={handleSkipAns} />
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
