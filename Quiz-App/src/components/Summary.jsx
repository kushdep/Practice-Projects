import quizOverImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";
export default function Summary({ userAnswers }) {
  const skippedAns = userAnswers.filter((ans) => ans === null);
  const correctAns = userAnswers.filter(
    (ans, idx) => ans === QUESTIONS[idx].answers[0]
  );

  const skippedAnsShare = Math.round(
    (skippedAns.length / userAnswers.length) * 100
  );

  const correctAnsShare = Math.round(
    (skippedAns.length / userAnswers.length) * 100
  );

  const wrongAnsShare = 100 - skippedAnsShare - correctAnsShare;

  return (
    <div id="summary">
      <img src={quizOverImg} alt="trophy" />
      <h2>QUIZ OVER</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsShare}</span>
          <span className="text">Skipped ans</span>
        </p>
        <p>
          <span className="number">{correctAnsShare}</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{ wrongAnsShare}</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ans, idx) => {
          let cssClass = "user-answer";

          if (ans === null) {
            cssClass += " skipped";
          } else if (ans === QUESTIONS[idx].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={idx}>
              <h3>{idx + 1}</h3>
              <p className="question">{QUESTIONS[idx].text}</p>
              <p className={cssClass}>{ans ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
