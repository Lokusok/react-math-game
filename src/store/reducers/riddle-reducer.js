import {INSTANTIATE_RIDDLE} from './../actions/instantiate-riddle';
import {SET_NEED_UPDATE} from './../actions/set-need-update';
import {INSTANTIATE_ANSWERS} from './../actions/instantiate-answers';
import {TOGGLE_SOUND} from "../actions/toggle-sound";


const initialState = {
  firstValue: 1,
  secondValue: 8,
  operator: '+',
  correct: 9,
  needUpdate: true,
  // Добавить стейт из answers-reducer (для того, чтобы всё обновлялось одновременно)
  numbers: [],
  soundPlays: false
};

function riddleReducer(state = initialState, action) {
  switch (action.type) {
    case INSTANTIATE_RIDDLE: {
      return {
        ...state,
        firstValue: action.firstValue,
        secondValue: action.secondValue,
        operator: action.operator,
        correct: action.correct,
        needUpdate: action.needUpdate,
      }
    }
    case SET_NEED_UPDATE: {
      return {
        ...state,
        needUpdate: action.needUpdate,
      }
    }
    case INSTANTIATE_ANSWERS: {
      return {
        ...state,
        numbers: action.numbers
      };
    }
    case TOGGLE_SOUND: {
      return {
        ...state,
        soundPlays: action.value,
      };
    }
    default: {
      return state;
    }
  }
}

export default riddleReducer;
