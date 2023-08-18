import style from './GameArea.module.css';
import PropTypes from 'prop-types';

import RiddleContainer from './Riddle/RiddleContainer';
import AnswersContainer from './Answers/AnswersContainer';
import FailSound from './FailSound/FailSound';


GameArea.propTypes = {
  answers: PropTypes.array.isRequired,
  correct: PropTypes.number.isRequired,
  failClickHandler: PropTypes.func.isRequired,
  successClickHandler: PropTypes.func.isRequired,
};

function GameArea({answers, correct, failClickHandler, successClickHandler}) {
  return (
    <section className={style.game}>
      <div className={`container ${style.gameContainer}`}>
        <div className={style.gameRow}>
          <RiddleContainer/>
          <AnswersContainer
            answers={answers}
            correct={correct}
            failClickHandler={failClickHandler}
            successClickHandler={successClickHandler}
          />
        </div>
      </div>

      <FailSound/>
    </section>
  );
}

export default GameArea;
