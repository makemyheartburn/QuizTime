import "./answer.css";
const Answer = ({ answer, onSelected, selectedAnswer }) => {
  return (
    <div
      className={`${selectedAnswer === answer.id ? "selected" : ""} test`}
      onClick={() => onSelected(answer.id)}
    >
      <span className="answer-number ">{answer.id}.</span>
      <span>{answer.answerText}</span>
    </div>
  );
};

export default Answer;

// Этот код отвечает за отображение одного ответа
// const app = ()=>{
//   const questionsArray = ['from','some','file']
//   question({questionsArray})
// }
// const question = ({questionsArray})=>{
//   answers({answersArray:questionsArray[0].answers})
// }
// const answers = ({answersArray})=>{
//   answersArray.map(answerObject=>answer({answerObject}))
// }
// const answer = ({answerObject})=>{
//   console.log(answerObject);
// }
