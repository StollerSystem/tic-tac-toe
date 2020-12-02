import historyReducer from '../../reducers/history-reducer';

describe ('history-reducer', () => {

  let action;
  const squares = Array(9).fill(null);
  action = {
    type: 'ADD_SQUARES',
    squares: squares
  };

  // const startingState = {
  //   history: [{squares: Array(9).fill(null)}],
  //   stepNumber: 0,
  //   xIsNext: true
  // }

  test('Should return default state if no action is triggered', () => {
    expect(historyReducer({}, { type: null})).toEqual({});
  })

  test('Should add an object to the history array', () => {
    expect(historyReducer({}, action)).toEqual({history: [{squares: squares}]})
  });

  
})