import * as types from './actionTypes';
import * as config from '../constants.js';

export function rivalFetchInit() {
  return {
    type: types.RIVAL_FETCH_INIT
  };
}

export function rivalFetchSuccess(dog1, dog2) {
  return {
    type: types.RIVAL_FETCH_SUCCESS,
    dog1: dog1,
    dog2: dog2
  };
}

export function rivalFetchFail(error) {
  return {
    type: types.RIVAL_FETCH_FAIL,
    error: error
  };
}

export function fetchRivals() {
  return function (dispatch) {
    dispatch(rivalFetchInit())
      return fetch(config.get_rival_dogs_url)
      .then(response => response.json())
      .then(json => {
          var dog1 = json['dogs'][0];
          var dog2 = json['dogs'][1];
          dispatch(rivalFetchSuccess(dog1, dog2))
      }).catch( (error) => {
          dispatch(rivalFetchFail(error))
      });
  }
}
