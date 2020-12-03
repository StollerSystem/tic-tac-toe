import * as actions from './../../actions';

describe('tic tac toe actions', () => {

  test('add squares should create ADD_SQUARES action', () => {
    const squares = "test";
    const history = "test";

    expect(actions.addSquares(squares, history)).toEqual({
      type: 'ADD_SQUARES',
      squares: [{squares: squares}],
      history: history
    })
  })
})
