export const INSTANTIATE_RIDDLE = 'INSTANTIATE_RIDDLE';


function doInstantiateRiddle({ firstValue, secondValue, operator, correct }) {
  return {
    type: INSTANTIATE_RIDDLE,
    firstValue: firstValue,
    secondValue: secondValue,
    operator: operator,
    correct: correct,
    needUpdate: false,
  };
}

export default doInstantiateRiddle;
