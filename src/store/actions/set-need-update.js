export const SET_NEED_UPDATE = 'SET_NEED_UPDATE';

function doSetNeedUpdate() {
  return {
    type: SET_NEED_UPDATE,
    needUpdate: true,
  };
}

export default doSetNeedUpdate;

