import * as c from './../actions/ActionTypes';

export default (state = [{ squares: Array(9).fill(null) }], action) => {
  const { squares, history } = action;
  switch (action.type) {
    case c.ADD_SQUARES:
      return history.concat(squares)
    default:
      return state;
  }
}