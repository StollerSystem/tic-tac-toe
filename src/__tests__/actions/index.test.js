import * as actions from './../../actions';

describe('tic tac toe actions', () => {

  test('add squares should create ADD_SQUARES action', () => {
    const squares = "test";
    const history = "test";
    expect(actions.addSquares(squares, history)).toEqual({
      type: 'ADD_SQUARES',
      squares: [{squares: squares}],
      history: history
    });
  });
  
  test('Step Number should increase by a value', () => {
    const step = 1;

    expect(actions.stepNumber(step)).toEqual({
      type: 'STEP_NUMBER',
      stepNumber: step
    });
  });

  test('x is next should create X_IS_NEXT action', () => {
    expect(actions.xIsNext()).toEqual({
      type: 'X_IS_NEXT'
    })
  })
});
