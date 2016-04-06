//@flow
'use strict';
import React, {
  Component,
  Image,
  TouchableElement,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux'

var styles = require('./LeaderButton.css.js');

var LeaderButton = React.createClass({
  buttonPressed: function() {
    if (this.props.hide != true ) {
      Actions.LeaderScreen();
    }
  },

  render: function() {
    return (
        <View style={styles.leaderBoardView}>
          <TouchableWithoutFeedback
            underlayColor="white"
            style={styles.button}
            onPress={this.buttonPressed}>
            <View>
              { this.props.hide == true ? [
                  <View key="3" style={styles.leaderBoardRibbon}></View>
              ] : [
                  <Image key="2" style={styles.leaderBoardRibbon}
                  resizeMode='contain'
                  source={require('./ribbon.png')} ></Image>
                ] }
            </View>
          </TouchableWithoutFeedback>        
        </View>
      );
  }
});       

module.exports = LeaderButton;
