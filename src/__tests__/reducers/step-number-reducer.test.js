import stepNumberReducer from '../../reducers/step-number-reducer';

describe('step-number-reducer', () => {

  test('Should return default if no action is triggered', () => {
    expect(stepNumberReducer({}, { type: null })).toEqual({});
  })

})