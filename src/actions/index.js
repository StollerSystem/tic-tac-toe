export const addSquares = (squares, history) => {
  return {
    type: 'ADD_SQUARES',
    squares: [{ squares: squares }],
    history: history
  }
}

export const stepNumber = (step) => {
  return {
    type: 'STEP_NUMBER',
    stepNumber: step
  }
}

export const xIsNext = () => {
  return {
    type: "X_IS_NEXT"
  }
}