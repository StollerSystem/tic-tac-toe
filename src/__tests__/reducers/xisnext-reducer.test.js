import xIsNextReducer from "../../reducers/xisnext-reducer.js"

describe ("xisnext-reducer", () => {
  test ("Should return default if no action triggered", () => {
    expect(xIsNextReducer({}, {type: null})).toEqual({})
  })
  
  test ("XisNext should return false", () => {
    const action ={
      type: "X_IS_NEXT",
      xIsNext: true
    }
    expect(xIsNextReducer({}, action)).toEqual({xIsNext: false})
  })
})