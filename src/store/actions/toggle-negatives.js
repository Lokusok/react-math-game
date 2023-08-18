export const TOGGLE_NEGATIVES = 'TOGGLE_NEGATIVES';

function doAllowNegatives(allowNegatives) {
  return {
    type: TOGGLE_NEGATIVES,
    allowNegatives: allowNegatives,
  };
}

export default doAllowNegatives;
