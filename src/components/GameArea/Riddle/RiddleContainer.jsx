import Riddle from './Riddle';

import {useSelector, useDispatch} from 'react-redux';
import doInstantiateRiddle from './../../../store/actions/instantiate-riddle';
import doSetNeedUpdate from "../../../store/actions/set-need-update";
import {random, sample} from 'lodash';


function RiddleContainer() {
  const firstValue = useSelector((state) => state.riddle.firstValue);
  const secondValue = useSelector((state) => state.riddle.secondValue);
  const operator = useSelector((state) => state.riddle.operator);

  return (
    <Riddle
      firstValue={firstValue}
      secondValue={secondValue}
      operator={operator}
    />
  );
}

export default RiddleContainer;
