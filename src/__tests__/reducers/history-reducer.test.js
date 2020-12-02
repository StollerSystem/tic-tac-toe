import historyReducer from '../../reducers/history-reducer';

describe ('history-reducer', () => {

  const startingHistory = [{squares: Array(9).fill(null)}];
  const squares = { squares: ['X', null, null, null, null, null, null, null, null ]};
  let action = {
    type: 'ADD_SQUARES',
    squares: squares
  };

  test('Should return default state if no action is triggered', () => {
      expect(historyReducer(startingHistory, { type: null})).toEqual(startingHistory);
    });

  
  test('Should succesfully add new slice to history array', () => {   
      expect(historyReducer(startingHistory, action)).toEqual(      [
        { squares: [null, null, null, null, null, null, null, null, null] },
        { squares: ['X', null, null, null, null, null, null, null, null] }
        ]
       );
    });
});

