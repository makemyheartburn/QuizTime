import Answers from "./Answers";

// const q = {
//   "answers": [
//     { "answerText": "yes", "id": 1, "correct": true },
//     { "answerText": "no", "id": 2, "correct": false },
//     { "answerText": "maybe", "id": 3, "correct": false },
//     { "answerText": "fuck you", "id": 4, "correct": false }
//   ],
//   "id": 1,
//   "question": "Will you marry me?"
// };
const Question = ({ question, onSelected, selectedAnswer, nextQuestion }) => {
  return (
    <div>
      <h2>
        <span className="question">Question {question.id}</span>{" "}
        {question.question}
      </h2>

      <Answers
        answers={question.answers}
        onSelected={onSelected}
        selectedAnswer={selectedAnswer}
      />
      <button onClick={() => nextQuestion()}> Submit </button>
    </div>
  );
};

export default Question;
