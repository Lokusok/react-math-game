export const INSTANTIATE_ANSWERS = 'INSTANTIATE_ANSWERS';

function doInstantiateAnswers(arrNumbers) {
  return {
    type: INSTANTIATE_ANSWERS,
    numbers: arrNumbers,
  };
}

export default doInstantiateAnswers;
