export default (state = {}, action) => {
  switch (action.type) {
    case "X_IS_NEXT" :
      return Object.assign({}, state, {
        xIsNext: !action.xIsNext
      })
  }
  return state
}