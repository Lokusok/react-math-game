import {TOGGLE_NEGATIVES} from "../actions/toggle-negatives";
import {TOGGLE_FRACTIONS} from "../actions/toggle-fractions";
import {TOGGLE_MODAL_OPTIONS} from '../actions/toggle-modal-options';
import {TOGGLE_MOBILE_MENU} from "../actions/toggle-mobile-menu";


const initialState = {
  showOptionsModal: false,
  showMobileMenu: false,
  allowNegatives: false,
  allowFractions: false,
};

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NEGATIVES: {
      return {
        ...state,
        allowNegatives: action.allowNegatives
      }
    }
    case TOGGLE_FRACTIONS: {
      return {
        ...state,
        allowFractions: action.allowFractions
      }
    }
    case TOGGLE_MODAL_OPTIONS: {
      return {
        ...state,
        showOptionsModal: action.showModal
      }
    }
    case TOGGLE_MOBILE_MENU: {
      return {
        ...state,
        showMobileMenu: action.showMobileMenu
      }
    }
    default: {
      return state;
    }
  }
}

export default optionsReducer;
