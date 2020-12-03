import * as c from './../actions/ActionTypes';

export default (state = 0, action) => {
  switch (action.type) {
    case c.STEP_NUMBER:
      const newState = action.stepNumber;
      return newState;
    default:
      return state;
  }

}