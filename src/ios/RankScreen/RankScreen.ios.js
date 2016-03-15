//@flow
'use strict';
import React, {
  Component,
  Text,
  View
} from 'react-native';

var TitleView = require('../TitleView/TitleView.ios.js');
var LeaderButton = require('../LeaderButton/LeaderButton.ios.js');
var DogView = require('../DogView/DogView.ios.js');
var styles = require('./RankScreen.css.js');

class RankScreen extends Component {
  render() {
    var dog1 = {
      src: "http://puppyintraining.com/wp-content/uploads/2013/01/golden-retriever-clover.jpg"
    };

    var dog2 = {
      src: "http://www.petpicturegallery.com/pictures/dogs/puppy/118-dog_puppy_cute_puppy.jpg"
    };

    return (
      <View style={styles.container}>
        <TitleView title="DogShow"></TitleView>
          <DogView dog={dog1}></DogView>
          <DogView dog={dog2}></DogView>
        <View style={styles.orTextWrapper}>
          <Text style={styles.defaultText}>OR</Text>
        </View>
      </View>
    );
  }
}

module.exports = RankScreen;
