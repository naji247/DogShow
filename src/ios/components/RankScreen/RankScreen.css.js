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
    top: 85,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  defaultText: {
    backgroundColor: "#9E7BFF",
    padding: 10,
    borderRadius: 22,
    color: 'white',
    fontFamily: 'Lato',
    fontSize: 20,
    overflow: 'hidden',
  },
});

module.exports = RankScreenCSS;
