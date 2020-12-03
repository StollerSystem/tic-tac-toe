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
    expect(stepNumberReducer({}, action)).toEqual(1);
  })

  test('Should jump stepNumber to specific step', () => {
    let state = { stepNumber: 8 };
    const action = {
      type: 'STEP_NUMBER',
      stepNumber: 1
    }
    expect(stepNumberReducer(state, action)).toEqual(1);
  })
})