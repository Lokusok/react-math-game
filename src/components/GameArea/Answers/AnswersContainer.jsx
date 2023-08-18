import Answers from './Answers';
import PropTypes from 'prop-types';

import { SET_NEED_UPDATE } from "../../../store/actions/set-need-update";
import doSetNeedUpdate from "../../../store/actions/set-need-update";
import {useDispatch} from 'react-redux';


AnswersContainer.propTypes = {
  answers: PropTypes.array.isRequired,
  correct: PropTypes.number.isRequired,
  failClickHandler: PropTypes.func.isRequired,
  successClickHandler: PropTypes.func.isRequired,
};

function AnswersContainer({ answers, correct, failClickHandler, successClickHandler }) {
  const dispatch = useDispatch();
  const advancedSuccessClickHandler = () => {
    dispatch(doSetNeedUpdate(SET_NEED_UPDATE));
  };

  return (
    <Answers
      answers={answers}
      correct={correct}
      failClickHandler={failClickHandler}
      successClickHandler={successClickHandler}
      advancedSuccessClickHandler={advancedSuccessClickHandler}
    />
  );
}

export default AnswersContainer;
