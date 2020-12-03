import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.X_IS_NEXT:
      return !state
    default:
      return state;
  }
}