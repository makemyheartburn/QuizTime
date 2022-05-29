import { useState } from "react";
import Question from "./components/Question";
import questions from "./questions.json";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  function onSelect(id) {
    setSelectedAnswer(id === selectedAnswer ? -1 : id);
  }

  function nextQuestion() {
    if (selectedAnswer === -1) {
      return;
    }

    const correctAnswer = questions[currentQuestion].answers.find(function (
      answer
    ) {
      if (answer.correct === true) {
        return true;
      }
    });
    if (selectedAnswer === correctAnswer.id) {
      console.log(true);
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(-1);
  }

  return (
    <div className="pink">
      {/* <div>Повесить картинку</div> */}
      <div>
        <h1 className="font">It's Quiz Time, my Dudes!</h1>
      </div>
      {questions.length > currentQuestion ? (
        <Question
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onSelected={onSelect}
          nextQuestion={nextQuestion}
        />
      ) : (
        <h2>Done</h2>
      )}
    </div>
  );
}

export default App;
