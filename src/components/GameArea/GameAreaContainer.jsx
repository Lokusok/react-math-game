import GameArea from './GameArea';
import PropTypes from 'prop-types';

import {useSelector, useDispatch} from 'react-redux';
import {random} from "lodash";
import doInstantiateRiddle from "../../store/actions/instantiate-riddle";
import doToggleSound from "../../store/actions/toggle-sound";
import doInstantiateAnswers from "../../store/actions/instantiate-answers";

import {makeRiddle, makeAnswers} from "../../utils";


GameAreaContainer.propTypes = {
  operator: PropTypes.string.isRequired,
};

function GameAreaContainer({operator}) {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.options);
  const needUpdate = useSelector((state) => state.riddle.needUpdate);
  const stateOperator = useSelector((state) => state.riddle.operator);

  let instantiateObject = {
    firstValue: random(0, 10), secondValue: random(0, 10), operator: operator, correct: null
  };
  instantiateObject.current = instantiateObject.firstValue + instantiateObject.secondValue;
  instantiateObject = makeRiddle(options, instantiateObject, operator);

  if (needUpdate || (stateOperator !== operator)) {
    dispatch(doInstantiateRiddle(instantiateObject));
  }

  const answers = useSelector((state) => state.riddle.numbers);
  const correct = useSelector((state) => state.riddle.correct);
  const randomNumbers = makeAnswers(options, [], operator, correct);

  const failClickHandler = () => {
    dispatch(doToggleSound(true));
  };

  const successClickHandler = () => {
    dispatch(doInstantiateAnswers(randomNumbers));
  };

  if (needUpdate || (stateOperator !== operator)) {
    dispatch(doInstantiateAnswers(randomNumbers));
  }

  return (
    <GameArea
      answers={answers}
      correct={correct}
      failClickHandler={failClickHandler}
      successClickHandler={successClickHandler}
    />
  );
}

export default GameAreaContainer;
