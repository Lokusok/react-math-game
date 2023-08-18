import Riddle from './Riddle';

import {useSelector} from 'react-redux';


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
