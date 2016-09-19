import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
  count2: 2,
  count3: 3,
  height: 10,
  width: 10,
  numMines: 5,
  gameStarted: false
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
