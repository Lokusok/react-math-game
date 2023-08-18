export const TOGGLE_MODAL_OPTIONS = 'TOGGLE_MODAL_OPTIONS';

function doToggleModalOptions(showModal) {
  return {
    type: TOGGLE_MODAL_OPTIONS,
    showModal: showModal,
  }
}

export default doToggleModalOptions;
