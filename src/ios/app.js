'use strict';

import React, { Component, StyleSheet } from 'react-native';

import RankScreen from './components/RankScreen/RankScreen.ios.js';
import LeaderScreen from './components/LeaderScreen/LeaderScreen.ios.js';

import {Scene, Router, Schema, Actions} from 'react-native-router-flux'

const scenes = Actions.create(
    <Scene key="root">
      <Scene key="RankScreen" initial={true} hideNavBar={true} component={RankScreen} title="DogShow"/>
      <Scene key="LeaderScreen" hideNavBar={true} component={LeaderScreen} title="LeaderScreen"/>
    </Scene>
);

export default class Application extends React.Component {
  render() {
      return <Router scenes={scenes} />; 
  }
}
