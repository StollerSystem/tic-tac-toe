import * as c from './ActionTypes';

export const addSquares = (squares, history) => {
  return {
    type: c.ADD_SQUARES,
    squares: [{ squares: squares }],
    history: history
  }
}

export const stepNumber = (step) => {
  return {
    type: c.STEP_NUMBER,
    stepNumber: step
  }
}

export const xIsNext = () => {
  return {
    type: c.X_IS_NEXT
  }
}