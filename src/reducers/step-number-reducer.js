export default (state = 0, action) => {  
  switch (action.type) {
    case 'STEP_NUMBER':
      const newState = action.stepNumber;
      return newState;
    default:
      return state;
  }

}