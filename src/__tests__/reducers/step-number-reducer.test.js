import stepNumberReducer from '../../reducers/step-number-reducer';

describe('step-number-reducer', () => {

  test('Should return default if no action is triggered', () => {
    expect(stepNumberReducer({}, { type: null })).toEqual({});
  })

  test('Should set step number to a value', () => {
    const action = {
      type: 'STEP_NUMBER',
      stepNumber: 1
    }
    expect(stepNumberReducer({}, action)).toEqual({stepNumber: 1})
  })

})