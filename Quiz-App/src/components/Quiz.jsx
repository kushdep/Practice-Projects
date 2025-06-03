import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../question";
import quizOverImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selAnswer) {
    setUserAnswers((prev) => [...prev, selAnswer]);
  },[]);

  const handleSkipAns = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

  if (isQuizOver) {
    return (
      <div id="summary">
        <img src={quizOverImg} alt="trophy" />
        <h2>QUIZ OVER</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAns={handleSkipAns}
      />
    </div>
  );
}
