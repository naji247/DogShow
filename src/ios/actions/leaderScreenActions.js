import * as types from './actionTypes';
import * as config from '../constants.js';

export function leadersFetchInit() {
  return {
    type: types.LEADERS_FETCH_INIT
  };
}

export function leadersFetchSuccess(dogs) {
  return {
    type: types.LEADERS_FETCH_SUCCESS,
    dogs: dogs,
  };
}

export function leadersFetchFail(error) {
  return {
    type: types.LEADERS_FETCH_FAIL,
    error: error
  };
}

export function fetchLeaders() {
  return function (dispatch) {
    dispatch(leadersFetchInit())
      return fetch(config.get_leaders_dogs_url)
      .then(response => response.json())
      .then(json => {
          var dogs = json['dogs'];
          dispatch(leadersFetchSuccess(dogs))
      }).catch( (error) => {
          dispatch(leadersFetchFail(error))
      });
  }
}
