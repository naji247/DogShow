//@flow
'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const RankScreenCSS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFCFF',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  
  orTextWrapper: {
    top: 90,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  defaultText: {
    height: 60,
    width: 60
  },
});

module.exports = RankScreenCSS;
