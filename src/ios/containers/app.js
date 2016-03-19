'use strict';

import React, { Component, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import DogShowApp from './dogshowApp.js';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Application extends React.Component {
  render() {
      return (
          <Provider store={store}>
            <DogShowApp />	
          </Provider>
          ); 
  }
}
