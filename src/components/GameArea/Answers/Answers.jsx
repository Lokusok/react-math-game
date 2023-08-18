import style from './Answers.module.css';
import PropTypes from 'prop-types';

import Answer from './Answer/Answer';
import AnswerStyle from './Answer/Answer.module.css';


Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  correct: PropTypes.number.isRequired,
  failClickHandler: PropTypes.func.isRequired,
  successClickHandler: PropTypes.func.isRequired,
  advancedSuccessClickHandler: PropTypes.func.isRequired,
};

function Answers({answers, correct, failClickHandler, successClickHandler, advancedSuccessClickHandler}) {
  const stylesIndexes = [
    AnswerStyle.first,
    AnswerStyle.second,
    AnswerStyle.third,
  ];

  const clickHandler = (isCorrect) => {
    if (isCorrect) {
      advancedSuccessClickHandler();
      successClickHandler();
    } else {
      failClickHandler();
    }
  };

  return (
    <div className={style.answers}>
      {
        answers.map((answer, index) =>
          <Answer
            key={index}
            className={stylesIndexes[index]}
            answerText={answer}
            isCorrect={answer == correct}
            onClick={() => clickHandler(answer == correct)}
          />
        )
      }
    </div>
  );
}

export default Answers;
