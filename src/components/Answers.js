import Answer from "./Answer";

const Answers = ({ answers, onSelected, selectedAnswer }) => {
  return (
    <div className="answers">
      {answers.map((answer) => {
        return (
          <Answer
            key={answer.id}
            answer={answer}
            onSelected={onSelected}
            selectedAnswer={selectedAnswer}
          />
        ); // мы хотим передать в компонент Answer текущий объект answer в котором содержится текущее описание состояние answer
      })}
    </div>
  );
};

export default Answers;

// Этот код отвечает за рендер списка ответов
// Компонент Anwers принимает пропс в виде anwers (массив)
// и выполняет функцию мап на массиве ответов возвращая  JSX компонент
