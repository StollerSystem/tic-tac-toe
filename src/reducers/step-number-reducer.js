export default (state = {}, action) => {  
  switch (action.type) {
    case 'STEP_NUMBER':
      const newState = Object.assign({}, state, {
        stepNumber: action.stepNumber
      })      
      return newState
    default:
      return state
  }

}