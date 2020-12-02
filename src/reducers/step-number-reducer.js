export default (state = {}, action) => {
  // console.log(state)
  switch (action.type) {
    case 'STEP_NUMBER':
      const newState = Object.assign({}, state, {
        stepNumber: action.stepNumber
      })
      // console.log(newState)
      return newState
    default:
      return state
  }

}