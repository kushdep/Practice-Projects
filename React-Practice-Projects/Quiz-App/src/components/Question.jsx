import ProgressBar from "./ProgressBar";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../question";

export default function Question({ index, onSelectAnswer, onSkipAns }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect != null) {
    timer = 2000;
  }

  function handleSelectAnswer(ans) {
    setAnswer({
      selectedAnswer: ans,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: ans,
        isCorrect: QUESTIONS[index].answers[0] === ans,
      });

      setTimeout(() => {
        onSelectAnswer(ans);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <ProgressBar
        key={timer}
        timeOut={timer}
        onTimeOut={answer.selectedAnswer !== "" ? onSkipAns : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selAnswer={answer.selectedAnswer}
        ansState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
