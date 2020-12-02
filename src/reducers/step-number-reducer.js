export default (state = {}, action) => {
  switch (action.type) {
    case 'STEP_NUMBER':
      return Object.assign({}, state, {
        stepNumber: action.stepNumber
      })
    default:
      return state
  }

}