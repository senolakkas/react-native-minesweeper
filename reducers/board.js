import * as types from '../actions/actionTypes';

const initialState = {
    count: 0,
    height: 10,
    width: 10,
    numMines: 5,
    gameStarted: false
};

export default function board(state = initialState, action = {}) {
    switch (action.type) {
        case types.INCREMENT:
            return {
        ...state,
                count: state.width + 1
            };
        case types.DECREMENT:
            return {
        ...state,
                count: state.width - 1
            };
        default:
            return state;
    }
}
