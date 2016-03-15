//@flow
'use strict';
import React, {
  Component,
  Image,
  TouchableElement,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} from 'react-native';

var styles = require('./LeaderButton.css.js');

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

module.exports = LeaderButton;
