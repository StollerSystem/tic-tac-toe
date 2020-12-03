import rootReducer from '../../reducers/index.js';
import { createStore } from 'redux';
import historyReducer from '../../reducers/history-reducer.js';
import stepNumberReducer from '../../reducers/step-number-reducer.js';
import xIsNextReducer from '../../reducers/xisnext-reducer.js';

let store = createStore(rootReducer)

describe('rootReducer', () => {

  test('Should return default state if no action is declared', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: false
    });
  });

  test('Check that initial state of historyReducer matches root reducer', () => {
    expect(store.getState().history).toEqual(historyReducer(undefined, { type: null }));
  });

  test('Check that initial state of stepNumberReducer matches root reducer', () => {
    expect(store.getState().stepNumber).toEqual(stepNumberReducer(undefined, { type: null }));
  });

  test('Check that initial state of xIsNextReducer matches root reducer', () => {
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(undefined, { type: null }));
  });
});
