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
  },

  loadingDogText: {
    color: '#9E7BFF',
    marginLeft: 150,
    fontFamily: 'Pacifico',
    fontSize: 35,
  },

  rankNumber: {
    width: 60,
    height: 60,
    padding:10,
    margin: 15,
  },
});

module.exports = DogViewCSS;
