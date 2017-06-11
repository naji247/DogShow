import * as types from '../actions/actionTypes';

const initialState = {
  dogs: [],
};

export default function rankScreen(state = initialState, action = {}) {
  switch (action.type) {
    case types.LEADERS_FETCH_SUCCESS:
      return {
        ...state,
        dogs: action.dogs,
      };
    default:
      return state;
  }
}
