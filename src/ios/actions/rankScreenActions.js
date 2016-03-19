import * as types from './actionTypes';

export function dogFetchInit() {
  return {
    type: types.DOG_FETCH_INIT
  };
}

export function dogFetchSuccess() {
  return {
    type: types.DOG_FETCH_SUCCESS
  };

export function dogFetchFail() {
  return {
    type: types.DOG_FETCH_FAIL
  };
}
