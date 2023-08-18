import GameArea from './GameArea';

import {useSelector, useDispatch} from 'react-redux';
import {random, sample} from "lodash";
import doInstantiateRiddle from "../../store/actions/instantiate-riddle";
import doToggleSound from "../../store/actions/toggle-sound";
import doInstantiateAnswers from "../../store/actions/instantiate-answers";


function GameAreaContainer() {
  const dispatch = useDispatch();
  const needUpdate = useSelector((state) => state.riddle.needUpdate);
  const operators = ['+', '-', '*', '/'];
  const instantiateObject = {
    firstValue: random(0, 10), secondValue: random(0, 10), operator: sample(operators), correct: 8
  };
  instantiateObject.current = instantiateObject.firstValue + instantiateObject.secondValue;

  if (instantiateObject.operator === '+') {
    instantiateObject.correct = instantiateObject.firstValue + instantiateObject.secondValue;
  } else if (instantiateObject.operator === '-') {
    instantiateObject.correct = instantiateObject.firstValue - instantiateObject.secondValue;
  } else if (instantiateObject.operator === '*') {
    instantiateObject.correct = instantiateObject.firstValue * instantiateObject.secondValue;
  } else if (instantiateObject.operator === '/') {
    while (instantiateObject.secondValue === 0) {
      instantiateObject.secondValue = random(0, 10);
    }

    instantiateObject.correct = Math.trunc((instantiateObject.firstValue / instantiateObject.secondValue) * 100) / 100;
  }

  if (needUpdate) {
    dispatch(doInstantiateRiddle(instantiateObject));
  }

  const answers = useSelector((state) => state.riddle.numbers);
  const correct = useSelector((state) => state.riddle.correct);
  const randomNumbers = [];

  for (let i = 0; i < 3; i++) {
    let randomValue = random(0, 10);

    while (randomNumbers.includes(randomValue)) {
      randomValue = random(0, 10);
    }

    randomNumbers.push(randomValue);
  }
  randomNumbers[random(0, randomNumbers.length - 1)] = correct;

  const failClickHandler = () => {
    dispatch(doToggleSound(true));
  };

  const successClickHandler = () => {
    dispatch(doInstantiateAnswers(randomNumbers));
  };

  if (needUpdate) {
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
