export const TOGGLE_SOUND = 'TOGGLE_SOUND';

function doToggleSound(needPlay) {
  return {
    type: TOGGLE_SOUND,
    value: needPlay,
  }
}

export default doToggleSound;
