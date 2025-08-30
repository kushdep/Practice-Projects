import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../question";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  console.log("Active Ques "+activeQuestionIndex)
  console.log("Ques length "+QUESTIONS.length)

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selAnswer) {
    setUserAnswers((prev) => [...prev, selAnswer]);
  },[]);

  const handleSkipAns = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

  if (activeQuestionIndex === QUESTIONS.length) {
    return <Summary userAnswers={userAnswers}/>
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
