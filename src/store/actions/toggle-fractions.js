export const TOGGLE_FRACTIONS = 'TOGGLE_FRACTIONS';

function doAllowFractions(allowFractions) {
  return {
    type: TOGGLE_FRACTIONS,
    allowFractions: allowFractions,
  };
}

export default doAllowFractions;
