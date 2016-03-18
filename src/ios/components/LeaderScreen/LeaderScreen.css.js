//@flow
'use strict';
import React, {
  StyleSheet,
  Dimensions,
} from 'react-native';

var dogHeight = .5 * (Dimensions.get('window').height - 85);

const LeaderScreenCSS = StyleSheet.create({
  container: {
    flex: 1
  },

  row: {
    height: dogHeight
  }
});

module.exports = LeaderScreenCSS;
