/**
 * DogShow - An app that ranks puppies.
 * https://github.com/nalnaji/DogMash
 *
 * @flow
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var RankScreen = require('./RankScreen.ios.js');

class DogShow extends Component {
  render() {
    return (
        <RankScreen></RankScreen>
    );
  }
}

AppRegistry.registerComponent('DogShow', () => DogShow);
