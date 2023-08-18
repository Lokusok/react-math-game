import {createStore, combineReducers} from 'redux';
import riddleReducer from './reducers/riddle-reducer';


const reducers = combineReducers({
  riddle: riddleReducer,
});

const store = createStore(reducers);

export default store;