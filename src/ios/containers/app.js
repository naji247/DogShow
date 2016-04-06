'use strict';

import React, { Component, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import * as reducers from '../reducers';
import DogShowApp from './dogshowApp.js';

const reducer = combineReducers(reducers);
const store = compose(applyMiddleware(thunk))(createStore)(reducer);


export default class Application extends React.Component {
  render() {
      return (
          <Provider store={store}>
            <DogShowApp />	
          </Provider>
          ); 
  }
}
