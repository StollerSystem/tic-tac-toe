export default (state = false, action) => {
  switch (action.type) {
    case "X_IS_NEXT":
      return !state
    default:
      return state;
  }
}