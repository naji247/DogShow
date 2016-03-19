import * as types from '../actions/actionTypes';

const initialState = {
  dog1: null,
  dog2: null
};

export default function rankScreen(state = initialState, action = {}) {
  switch (action.type) {
//    case types.INCREMENT:
//      return {
//        ...state,
//        count: state.count + 1
//      };
    default:
      return state;
  }
}
