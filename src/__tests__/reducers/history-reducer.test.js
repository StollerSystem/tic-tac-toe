import historyReducer from '../../reducers/history-reducer';


describe ('history-reducer', () => {

  test('Should return default state if no action is triggered', () => {
    expect(historyReducer({}, { type: null})).toEqual({});
  })
})