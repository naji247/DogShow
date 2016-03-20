import * as types from '../actions/actionTypes';

const initialState = {
  dog1: null,
  dog2: null
};

export default function rankScreen(state = initialState, action = {}) {
  switch (action.type) {
    case types.RIVAL_FETCH_INIT:
      //When fetching new dogs, reset their state
      //so that the loading indicator shows.
      return {
        ...state,
        dog1: null,
        dog2: null
      };
    case types.RIVAL_FETCH_SUCCESS:
      return {
        ...state,
        dog1: action.dog1,
        dog2: action.dog2
      };
    default:
      return state;
  }
}
