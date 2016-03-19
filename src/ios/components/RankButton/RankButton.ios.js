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

var styles = require('./RankButton.css.js');

var RankButton = React.createClass({
  buttonPressed: function() {
    Actions.pop();
  },

  render: function() {
    return (
        <View style={styles.rankButtonView}>
          <TouchableWithoutFeedback
            underlayColor="white"
            style={styles.button}
            onPress={this.buttonPressed}>
            <View>
              { this.props.hide == true ? [
                  <View style={styles.rankPawPrint}></View>
              ] : [
                  <Image style={styles.rankPawPrint}
                  resizeMode='contain'
                  source={require('./paw_print.png')} ></Image>
                ] }
            </View>
          </TouchableWithoutFeedback>        
        </View>
        );
  }
});       

module.exports = RankButton;
