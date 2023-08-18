import {createStore, combineReducers} from 'redux';
import riddleReducer from './reducers/riddle-reducer';
import optionsReducer from './reducers/options-reducer';


const reducers = combineReducers({
  riddle: riddleReducer,
  options: optionsReducer,
});

const store = createStore(reducers);

export default store;