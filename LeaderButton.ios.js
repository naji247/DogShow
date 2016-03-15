//@flow
'use strict';
import React, {
  Component,
  Image,
  StyleSheet,
  TouchableElement,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} from 'react-native';

var LeaderButton = React.createClass({
  buttonClicked: function() {
    console.log('button clicked');
  },

  render: function() {
    var TouchableElement = TouchableHighlight;
    return (
        <View style={styles.leaderBoardView}>
          <TouchableElement
            style={styles.button}
            onPress={this.buttonClicked}>
            <View>
              <Image style={styles.leaderBoardRibbon}
              resizeMode='contain'
              source={require('./ribbon.png')} ></Image>
            </View>
          </TouchableElement>        
        </View>
        );
  }
});       

const styles = StyleSheet.create({
  leaderBoardRibbon: {
    height: 35,
    width: 35,
  },

  leaderBoardView: {
    margin: 15,
  }
});

module.exports = LeaderButton;
