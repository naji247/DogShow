//@flow
'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var TitleView = require('./TitleView.ios.js');
var LeaderButton = require('./LeaderButton.ios.js');
var DogView = require('./DogView.ios.js');

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

const styles = StyleSheet.create({
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

module.exports = RankScreen;
