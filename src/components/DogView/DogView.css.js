//@flow
'use strict';
import React, {
  StyleSheet,
} from 'react-native';

const DogViewCSS = StyleSheet.create({
  dogView: {
    flex: .5,
  },

  loadingDogView: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loadingDogText: {
    color: '#9E7BFF',
    fontFamily: 'Pacifico',
    fontSize: 35,
    width: 170
  },

  rankNumber: {
    width: 60,
    height: 60,
    padding:10,
    margin: 15,
  },
});

module.exports = DogViewCSS;
