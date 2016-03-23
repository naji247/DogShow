//@flow
'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const DogViewCSS = StyleSheet.create({
  dogView: {
    flex: .5,
  },

  rankNumber: {
    borderRadius: 25,
    width: 50,
    height: 50,
    padding:10,
    margin: 15,

    overflow: 'hidden',
    backgroundColor: '#9E7BFF',
    borderWidth: 0,
    borderColor: 'black',
    textAlign: 'center',
    color: 'white',

    fontSize: 25,
    fontFamily: 'Lato-Light',
  },
});

module.exports = DogViewCSS;
