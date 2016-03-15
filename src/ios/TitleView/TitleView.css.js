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
    flex: .18,
    flexDirection: 'row',
  },

  titleFont: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    color: 'white',
    fontSize: 30,
    flex: 1,
    marginLeft: 70
  },
});

module.exports = TitleViewCSS;
