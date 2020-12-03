import historyReducer from '../../reducers/history-reducer';
import * as c from '../../actions/ActionTypes';

describe('history-reducer', () => {

  const startingHistory = [{ squares: Array(9).fill(null) }];
  const squares = { squares: ['X', null, null, null, null, null, null, null, null] };
  let action = {
    type: c.ADD_SQUARES,
    squares: squares,
    history: startingHistory
  };

  test('Should return default state if no action is triggered', () => {
    expect(historyReducer(startingHistory, { type: null })).toEqual(startingHistory);
  });


  test('Should succesfully add new slice to history array', () => {
    expect(historyReducer(startingHistory, action)).toEqual([
      { squares: [null, null, null, null, null, null, null, null, null] },
      { squares: ['X', null, null, null, null, null, null, null, null] }
    ]
    );
  });
});

