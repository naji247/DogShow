//@flow
'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const TitleViewCSS = StyleSheet.create({
  titleView: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#9E7BFF',
    height: 85,
    flexDirection: 'row',
  },

  titleFont: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    color: 'white',
    fontSize: 30,
    flex: 1,
  },
});

module.exports = TitleViewCSS;
