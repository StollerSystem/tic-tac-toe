export default (state = {}, action) => {
  const { squares } = action;
  switch (action.type) {
    case 'ADD_SQUARES':      
      return Object.assign({}, state, {
        history: [{
        squares: squares
        }]
      })
    default:
      return state;
  }
}
