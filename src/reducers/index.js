import historyReducer from './history-reducer';
import stepNumberReducer from './step-number-reducer';
import xIsNextReducer from './xisnext-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer
});

export default rootReducer;