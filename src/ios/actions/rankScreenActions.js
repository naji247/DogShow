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

export function rivalVoteInit() {
  return {
    type: types.RIVAL_VOTE_INIT
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

export function rivalVote(winner, loser) {
  return function (dispatch) {
    dispatch(rivalVoteInit())
    //TODO: Calculate new winner and loser
    
    //Submit two requests via Fetch call
    //This is because our RESTful API requires
    //one API call for both dogs
    return Promise.all([
        dispatch(updateRival(winner)),
        dispatch(updateRival(loser))
    ]).then(() => {
      console.log("Successfully voted.");
    }).catch((error) => {
      console.log(error);
    });
  }
}

export function updateRival(dog) {
  return function (dispatch) {
    return fetch(config.put_rival_dogs_url(dog), {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dog)})
      .then(response => response.json())
      .then(json => {
        console.log("Successfully updated dog.");
      }).catch( (error) => {
        console.log("Failed to updated dog.");
      });
  }
}

