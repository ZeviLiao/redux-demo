import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const defaultState = {
  value: 0
};

const calculator = handleActions(
  {
    PLUS: (state, { payload }) => ({
      ...state,
      value: state.value + payload.num
    }),
    MINUS: (state, { payload }) => ({
      ...state,
      value: state.value - payload.num
    })
  },
  defaultState
);

const calculatorApp = combineReducers({
  calculator
});

export default calculatorApp;
