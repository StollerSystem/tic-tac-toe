export default (state = [{ squares: Array(9).fill(null) }], action) => {
  const { squares } = action;
  switch (action.type) {
    case 'ADD_SQUARES':
      return state.concat(squares)
    default:
      return state;
  }
}


// const gameHistoryReducer = (state = [], action) => {

//   const { squares } = action;
//   switch (action.type) {
//     case 'ADD_HISTORY':
//       return state.concat(squares)
//     default:
//       return state;
//   }
// };

// export default gameHistoryReducer;
